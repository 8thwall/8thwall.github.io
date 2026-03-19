---
sidebar_label: addCameraPipelineModule()
---
# XR8.addCameraPipelineModule()

`XR8.addCameraPipelineModule(module)`

## Description {#description}

8th Wall camera applications are built using a camera pipeline module framework. For a full description on camera pipeline modules, see [CameraPipelineModule](/api/camerapipelinemodule).

Applications install modules which then control the behavior of the application at runtime. A module object must have a **.name** string which is unique within the application, and then should provide one or more of the camera lifecycle methods which will be executed at the appropriate point in the run loop.

During the main runtime of an application, each camera frame goes through the following cycle:

`onBeforeRun` -> `onCameraStatusChange` (`requesting` -> `hasStream` -> `hasVideo` | `failed`) -> `onStart` -> `onAttach` -> `onProcessGpu` -> `onProcessCpu` -> `onUpdate` -> `onRender`

Camera modules should implement one or more of the following camera lifecycle methods:

Function | Description
-------- | -----------
[onAppResourcesLoaded](/api/camerapipelinemodule/onappresourcesloaded) | Called when we have received the resources attached to an app from the server.
[onAttach](/api/camerapipelinemodule/onattach) | Called before the first time a module receives frame updates. It is called on modules that were added either before or after the pipeline is running.
[onBeforeRun](/api/camerapipelinemodule/onbeforerun) | Called immediately after [`XR8.run()`](run.md). If any promises are returned, XR will wait on all promises before continuing.
[onCameraStatusChange](/api/camerapipelinemodule/oncamerastatuschange) | Called when a change occurs during the camera permissions request.
[onCanvasSizeChange](/api/camerapipelinemodule/oncanvassizechange) | Called when the canvas changes size.
[onDetach](/api/camerapipelinemodule/ondetach) | is called after the last time a module receives frame updates. This is either after the engine is stopped or the module is manually removed from the pipeline, whichever comes first.
[onDeviceOrientationChange](/api/camerapipelinemodule/ondeviceorientationchange) | Called when the device changes landscape/portrait orientation.
[onException](/api/camerapipelinemodule/onexception) | Called when an error occurs in XR. Called with the error object.
[onPaused](/api/camerapipelinemodule/onpaused) | Called when [`XR8.pause()`](pause.md) is called.
[onProcessCpu](/api/camerapipelinemodule/onprocesscpu) | Called to read results of GPU processing and return usable data.
[onProcessGpu](/api/camerapipelinemodule/onprocessgpu) | Called to start GPU processing.
[onRemove](/api/camerapipelinemodule/onremove) | is called when a module is removed from the pipeline.
[onRender](/api/camerapipelinemodule/onrender) | Called after onUpdate. This is the time for the rendering engine to issue any WebGL drawing commands. If an application is providing its own run loop and is relying on [`XR8.runPreRender()`](runprerender.md) and [`XR8.runPostRender()`](runpostrender.md), this method is not called and all rendering must be coordinated by the external run loop.
[onResume](/api/camerapipelinemodule/onresume) | Called when [`XR8.resume()`](resume.md) is called.
[onStart](/api/camerapipelinemodule/onstart) | Called when XR starts. First callback after [`XR8.run()`](run.md) is called.
[onUpdate](/api/camerapipelinemodule/onupdate) | Called to update the scene before render. Data returned by modules in [`onProcessGpu`](/api/camerapipelinemodule/onprocessgpu) and [`onProcessCpu`](/api/camerapipelinemodule/onprocesscpu) will be present as processGpu.modulename and processCpu.modulename where the name is given by module.name = "modulename".
[onVideoSizeChange](/api/camerapipelinemodule/onvideosizechange) | Called when the canvas changes size.
[requiredPermissions](/api/camerapipelinemodule/requiredpermissions) | Modules can indicate what browser capabilities they require that may need permissions requests. These can be used by the framework to request appropriate permissions if absent, or to create components that request the appropriate permissions before running XR.

Note: Camera modules that implement [`onProcessGpu`](/api/camerapipelinemodule/onprocessgpu) or [`onProcessCpu`](/api/camerapipelinemodule/onprocesscpu) can provide data to subsequent stages of the pipeline. This is done by the module's name.

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
module | `Object` | The module object.

## Returns {#returns}

None

## Example 1 - A camera pipeline module for managing camera permissions: {#example-1---a-camera-pipeline-module-for-managing-camera-permissions}

```javascript
XR8.addCameraPipelineModule({
  name: 'camerastartupmodule',
  onCameraStatusChange: ({status}) {
    if (status == 'requesting') {
      myApplication.showCameraPermissionsPrompt()
    } else if (status == 'hasStream') {
      myApplication.dismissCameraPermissionsPrompt()
    } else if (status == 'hasVideo') {
      myApplication.startMainApplictation()
    } else if (status == 'failed') {
      myApplication.promptUserToChangeBrowserSettings()
    }
  },
})
```

## Example 2 - a QR code scanning application could be built like this {#example-2---a-qr-code-scanning-application-could-be-built-like-this}

```javascript
// Install a module which gets the camera feed as a UInt8Array.
XR8.addCameraPipelineModule(
  XR8.CameraPixelArray.pipelineModule({luminance: true, width: 240, height: 320}))

// Install a module that draws the camera feed to the canvas.
XR8.addCameraPipelineModule(XR8.GlTextureRenderer.pipelineModule())

// Create our custom application logic for scanning and displaying QR codes.
XR8.addCameraPipelineModule({
  name: 'qrscan',
  onProcessCpu: ({processGpuResult}) => {
    // CameraPixelArray.pipelineModule() returned these in onProcessGpu.
    const { pixels, rows, cols, rowBytes } = processGpuResult.camerapixelarray
    const { wasFound, url, corners } = findQrCode(pixels, rows, cols, rowBytes)
    return { wasFound, url, corners }
  },
  onUpdate: ({processCpuResult}) => {
    // These were returned by this module ('qrscan') in onProcessCpu
    const {wasFound, url, corners } = processCpuResult.qrscan
    if (wasFound) {
      showUrlAndCorners(url, corners)
    }
  },
})
```
