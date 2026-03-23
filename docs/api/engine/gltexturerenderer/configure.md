---
sidebar_label: configure()
---
# XR8.GlTextureRenderer.configure()

`XR8.GlTextureRenderer.configure({ vertexSource, fragmentSource, toTexture, flipY, mirroredDisplay })`

## Description {#description}

Configures the pipeline module that draws the camera feed to the canvas.

## Parameters {#parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
vertexSource [Optional] | `String` | A no-op vertex shader | The vertex shader source to use for rendering.
fragmentSource [Optional] | `String` | A no-op fragment shader | The fragment shader source to use for rendering.
toTexture [Optional] | [`WebGlTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) | The canvas | A texture to draw to. If no texture is provided, drawing will be to the canvas.
flipY [Optional] | `Boolean` | `false` | If true, flip the rendering upside-down.
mirroredDisplay [Optional] | `Boolean` | `false` | If true, flip the rendering left-right.

## Returns {#returns}

None

## Example {#example}

```javascript
const purpleShader =
  // Purple.
  ` precision mediump float;
    varying vec2 texUv;
    uniform sampler2D sampler;
    void main() {
      vec4 c = texture2D(sampler, texUv);
      float y = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      vec3 p = vec3(.463, .067, .712);
      vec3 p1 = vec3(1.0, 1.0, 1.0) - p;
      vec3 rgb = y < .25 ? (y * 4.0) * p : ((y - .25) * 1.333) * p1 + p;
      gl_FragColor = vec4(rgb, c.a);
    }`

XR8.GlTextureRenderer.configure({fragmentSource: purpleShader})
```
