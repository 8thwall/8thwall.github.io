---
id: tracking-and-camera-issues
sidebar_position: 4
---
# Tracking And Camera Issues

## 6DoF Camera Motion Not Working {#camera-problem}

#### Issue {#camera-issue}

As I move my phone, the camera position does not update.

#### Resolution {#camera-resolution}

Check the position of the camera in your scene.  The camera should **NOT** be at a height (Y) of
zero.  Set it to Non-Zero value.  The Y position of the camera at start effectively determines the
scale of virtual content on a surface (e.g. smaller y, bigger content)

## Object Not Tracking Surface Properly {#tracking-problem}

#### Issue {#tracking-issue}

Content in my scene doesn't appear to be "sticking" to a surface properly

#### Resolution {#tracking-resolution}

To place an object on a surface, the **base** of the object needs to be at a **height of Y=0**

**Note**: Setting the position at a height of Y=0 isn't necesarily sufficient.

For example, if the transform your model is at the center of the object, placing it at Y=0 will
result in part of the object living below the surface.  In this case you'll need to adjust the
vertical position of the object so that the bottom of the object sits at Y=0.

It's often helpful to visualize object positioning relative to the surface by placing a
semi-transparent plane at Y=0.

#### A-Frame example {#a-frame-example}

```html
<a-plane
  position="0 0 0"
  rotation="-90 0 0"
  width="4"
  height="4"
  material="side: double; color: #FFFF00; transparent: true; opacity: 0.5"
  shadow>
</a-plane>
```

#### three.js example {#threejs-example}

```javascript
  // Create a 1x1 Plane with a transparent yellow material
  var geometry = new THREE.PlaneGeometry(1, 1, 1, 1);   // THREE.PlaneGeometry (width, height, widthSegments, heightSegments)
  var material = new THREE.MeshBasicMaterial({color: 0xffff00, transparent:true, opacity:0.5, side: THREE.DoubleSide});
  var plane = new THREE.Mesh(geometry, material);
  // Rotate 90 degrees (in radians) along X so plane is parallel to ground
  plane.rotateX(1.5708)
  plane.position.set(0, 0, 0)
  scene.add( plane );
```
