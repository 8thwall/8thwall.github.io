import React, { useRef, useEffect } from 'react';

export default function HeroCanvas() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;

    const ctx = canvas.getContext('2d');
    const WORD = 'forever';
    const CELL = 10;
    const GRAD = [[255, 248, 6], [173, 80, 255], [87, 191, 255]];
    const RADIUS = CELL * 7;
    const SHAPE_HIT_RADIUS = CELL * 2.5;
    const RESIZE_THRESHOLD = 80;
    const REFORM_THRESHOLD = 3;
    const REFORMED_RATIO_UNLOCK = 0.9;
    const fsz = CELL * 0.82;
    const mouse = { x: -9999, y: -9999 };
    let cells = [];
    let lastCanvasW = 0, lastCanvasH = 0;
    let rafId;

    function lerpGrad(t) {
      const s = t * (GRAD.length - 1);
      const i = Math.min(Math.floor(s), GRAD.length - 2);
      const f = s - i;
      const a = GRAD[i], b = GRAD[i + 1];
      return [a[0] + f * (b[0] - a[0]), a[1] + f * (b[1] - a[1]), a[2] + f * (b[2] - a[2])];
    }
    function getColor(c, dist) {
      const base = [153, 92, 214];
      const grad = lerpGrad(c.idx / Math.max(cells.length, 1));
      if (c.colorT > 0.01) {
        const r = (base[0] + (grad[0] - base[0]) * c.colorT) | 0;
        const g = (base[1] + (grad[1] - base[1]) * c.colorT) | 0;
        const b = (base[2] + (grad[2] - base[2]) * c.colorT) | 0;
        return `rgb(${r},${g},${b})`;
      }
      if (dist < RADIUS) {
        const p = Math.pow(1 - dist / RADIUS, 2);
        return `rgb(${(153 + p * 58) | 0},${(92 + p * 69) | 0},${(214 + p * 40) | 0})`;
      }
      return 'hsl(270,60%,60%)';
    }

    function buildShape() {
      const W = Math.max(canvas.offsetWidth, 100);
      const H = Math.max(canvas.offsetHeight, 100);
      canvas.width = W;
      canvas.height = H;
      lastCanvasW = W;
      lastCanvasH = H;
      const cx = W / 2, cy = H / 2;
      const isSmall = W <= 768;
      const shapeScale = isSmall ? 1.05 : 0.85;
      const heightDiv = isSmall ? 2.6 : 3.2;
      const widthFactor = isSmall ? 0.3 : 0.22;
      const R = Math.min(H / heightDiv, W * widthFactor) * shapeScale;
      const T = R * 0.56;
      const r = R - T;
      const SY = 0.9;
      const offset = (2 * R - T) * SY;

      const off = document.createElement('canvas');
      off.width = W;
      off.height = H;
      const octx = off.getContext('2d');
      function hexPoints(radius, centerY) {
        return Array.from({ length: 6 }, (_, i) => {
          const a = -Math.PI / 2 + (i * Math.PI * 2) / 6;
          return [cx + radius * Math.cos(a), centerY + radius * Math.sin(a) * SY];
        });
      }
      function roundedPoly(c2, pts, rad) {
        const n = pts.length;
        c2.moveTo((pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2);
        for (let i = 0; i < n; i++) {
          const [x1, y1] = pts[(i + 1) % n], [x2, y2] = pts[(i + 2) % n];
          c2.arcTo(x1, y1, (x1 + x2) / 2, (y1 + y2) / 2, rad);
          c2.lineTo((x1 + x2) / 2, (y1 + y2) / 2);
        }
        c2.closePath();
      }
      function drawHex(centerY) {
        octx.beginPath();
        roundedPoly(octx, hexPoints(R, centerY), R * 0.1);
        roundedPoly(octx, hexPoints(r, centerY), R * 0.1);
        octx.fillStyle = '#fff';
        octx.fill('evenodd');
      }
      drawHex(cy - offset / 2);
      drawHex(cy + offset / 2);

      const imgData = octx.getImageData(0, 0, W, H).data;
      const litRows = new Set();
      for (let row = 0; row < H; row += CELL) {
        for (let col = 0; col < W; col += CELL) {
          const px = (col + CELL / 2) | 0, py = (row + CELL / 2) | 0;
          if (imgData[(py * W + px) * 4] > 100) { litRows.add(row); break; }
        }
      }
      const trimmedRows = new Set([...litRows].sort((a, b) => a - b).slice(1, -1));
      cells = [];
      let li = 0;
      for (let row = 0; row < H; row += CELL) {
        if (!trimmedRows.has(row)) continue;
        for (let col = 0; col < W; col += CELL) {
          const px = (col + CELL / 2) | 0, py = (row + CELL / 2) | 0;
          if (imgData[(py * W + px) * 4] > 100) {
            cells.push({ bx: px, by: py, x: px, y: py, char: WORD[li % WORD.length], idx: li++, vx: 0, vy: 0, glitch: 0, cooldown: 0, colorT: 0 });
          }
        }
      }
    }

    function isPointOverShape(px, py) {
      for (let i = 0; i < cells.length; i++) {
        if (Math.hypot(cells[i].bx - px, cells[i].by - py) <= SHAPE_HIT_RADIUS) return true;
      }
      return false;
    }
    function getReformedRatio() {
      if (!cells.length) return 1;
      let n = 0;
      for (let i = 0; i < cells.length; i++) {
        const c = cells[i];
        if (Math.hypot(c.bx - c.x, c.by - c.y) < REFORM_THRESHOLD) n++;
      }
      return n / cells.length;
    }
    function scatter() {
      cells.forEach(c => {
        const a = Math.random() * Math.PI * 2;
        const spd = 6 + Math.random() * 14;
        c.vx = Math.cos(a) * spd;
        c.vy = Math.sin(a) * spd;
        c.glitch = 240;
        c.cooldown = 230;
      });
    }
    function setMouse(e) {
      const rb = canvas.getBoundingClientRect();
      const src = e.touches ? e.touches[0] : e;
      mouse.x = (src.clientX - rb.left) * (canvas.width / rb.width);
      mouse.y = (src.clientY - rb.top) * (canvas.height / rb.height);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fsz}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (const c of cells) {
        if (c.glitch > 0) {
          c.colorT = Math.min(1, c.colorT + 0.06);
          c.vx *= 0.98;
          c.vy *= 0.98;
          c.x += c.vx;
          c.y += c.vy;
          c.glitch--;
          if (c.cooldown > 0) c.cooldown--;
        } else if (c.cooldown > 0 || Math.hypot(c.bx - c.x, c.by - c.y) > 100) {
          c.colorT = Math.max(0, c.colorT - 0.008);
          c.x += (c.bx - c.x) * 0.0054;
          c.y += (c.by - c.y) * 0.0054;
          if (c.cooldown > 0) c.cooldown--;
        } else {
          c.colorT = Math.max(0, c.colorT - 0.02);
          const dx = c.bx - mouse.x, dy = c.by - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < RADIUS && dist > 0) {
            const force = Math.pow(1 - dist / RADIUS, 2) * CELL * 4;
            c.x += (c.bx + (dx / dist) * force - c.x) * 0.18;
            c.y += (c.by + (dy / dist) * force - c.y) * 0.18;
          } else {
            c.x += (c.bx - c.x) * 0.009;
            c.y += (c.by - c.y) * 0.009;
          }
        }
        const dist = Math.hypot(c.bx - mouse.x, c.by - mouse.y);
        ctx.shadowBlur = (c.colorT < 0.01 && dist < RADIUS) ? 9 * (1 - dist / RADIUS) : 0;
        ctx.shadowColor = '#a855f7';
        ctx.fillStyle = getColor(c, dist);
        ctx.fillText(c.char, c.x, c.y);
      }
      rafId = requestAnimationFrame(draw);
    }

    const onTouchMove = (e) => {
      setMouse(e);
      if (e.touches.length && isPointOverShape(mouse.x, mouse.y) && getReformedRatio() >= REFORMED_RATIO_UNLOCK) {
        e.preventDefault();
      }
    };
    const onTouchStart = (e) => {
      setMouse(e);
      if (e.touches.length && isPointOverShape(mouse.x, mouse.y) && getReformedRatio() >= REFORMED_RATIO_UNLOCK) {
        e.preventDefault();
        scatter();
      }
    };
    const onResize = () => {
      const W = Math.max(canvas.offsetWidth, 100);
      const H = Math.max(canvas.offsetHeight, 100);
      if (Math.abs(W - lastCanvasW) > RESIZE_THRESHOLD) {
        lastCanvasW = W;
        lastCanvasH = H;
        buildShape();
      }
    };

    hero.addEventListener('mousemove', setMouse);
    hero.addEventListener('touchmove', onTouchMove, { passive: false });
    hero.addEventListener('click', scatter);
    hero.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('resize', onResize);

    buildShape();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      hero.removeEventListener('mousemove', setMouse);
      hero.removeEventListener('touchmove', onTouchMove);
      hero.removeEventListener('click', scatter);
      hero.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={heroRef} style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden />
    </div>
  );
}
