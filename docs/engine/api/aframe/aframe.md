# XR8.AFrame

A-Frame (<https://aframe.io>) is a web framework designed for building virtual reality experiences.
By adding 8th Wall Web to your A-Frame project, you can now easily build **augmented reality**
experiences for the web.

## Components
Component | Description
--------- | -----------
[xrconfig](xrconfig) | Used to configure the camera feed
[xrface](xrface) | Used to configure face effects
[xrlayers](xrlayers) | Used to configure sky effects
[xrlayerscene](xrlayers) | Used to configure sky effects
[xrweb](xrweb) | Used to configure world tracking

## Functions

Function | Description
-------- | -----------
[xrconfigComponent](xrconfigcomponent.md) | Creates an A-Frame component for configuring the camera which can be registered with `AFRAME.registerComponent()`. Generally won't need to be called directly.
[xrwebComponent](xrwebcomponent.md) | Creates an A-Frame component for World Tracking and/or Image Target tracking which can be registered with `AFRAME.registerComponent()`. Generally won't need to be called directly.
[xrlayersComponent](xrlayerscomponent.md) | Creates an A-Frame component for Layers tracking which can be registered with `AFRAME.registerComponent()`. Generally won't need to be called directly.
[xrfaceComponent](xrfacecomponent.md) | Creates an A-Frame component for Face Effects tracking which can be registered with `AFRAME.registerComponent()`. Generally won't need to be called directly.
[xrlayersceneComponent](xrlayerscenecomponent.md) | Creates an A-Frame component for a Layer scene which can be registered with `AFRAME.registerComponent()`. Generally won't need to be called directly.

## Examples

#### Example - SLAM enabled (default) {#example---slam-enabled-default}

```html
<a-scene xrconfig xrweb>
```

#### Example - SLAM disabled (image tracking only) {#example---slam-disabled-image-tracking-only}

```html
<a-scene xrconfig xrweb="disableWorldTracking: true">
```

#### Example - Front camera (image tracking only) {#example---front-camera-image-tracking-only}

```html
<a-scene xrconfig="cameraDirection: front" xrweb="disableWorldTracking: true">
```

#### Example - Front camera Sky Effects {#example---front-camera-sky-effects}

```html
<a-scene xrconfig="cameraDirection: front" xrlayers>
```

#### Example - Sky + SLAM {#example---sky--slam}

```html
<a-scene xrconfig xrweb xrlayers>
  <a-entity xrlayerscene="name: sky; edgeSmoothness:0.6; invertLayerMask: true;">
    <!-- Add your Sky Effects content here. -->
  </a-entity>
</a-scene>
```

#### Example - Face Effects {#example---face-effects}

```html
<a-scene xrconfig xrface>
```

#### Example - Face Effects with Ears {#example---face-effects-ears}

```html
<a-scene xrconfig xrface="enableEars:true">
```
