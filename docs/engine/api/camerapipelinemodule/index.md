# CameraPipelineModule

8th Wall camera applications are built using a camera pipeline module framework. Applications install modules which then control the behavior of the application at runtime.

Refer to [`XR8.addCameraPipelineModule()`](/docs/engine/api/xr8/addcamerapipelinemodule) for details on adding camera pipeline modules to your application.

A camera pipeline module object must have a **.name** string which is unique within the application. It should implement one or more of the following camera lifecycle methods.  These methods will be executed at the appropriate point in the run loop.

During the main runtime of an application, each camera frame goes through the following cycle:

`onBeforeRun` -> `onCameraStatusChange` (`requesting` -> `hasStream` -> `hasVideo` | `failed`) -> `onStart` -> `onAttach` -> `onProcessGpu` -> `onProcessCpu` -> `onUpdate` -> `onRender`

Camera modules should implement one or more of the following camera lifecycle methods:

Function | Description
-------- | -----------
[onAppResourcesLoaded](onappresourcesloaded.md) | Called when we have received the resources attached to an app from the server.
[onAttach](onattach.md) | Called before the first time a module receives frame updates. It is called on modules that were added either before or after the pipeline is running.
[onBeforeRun](onbeforerun.md) | Called immediately after [`XR8.run()`](/docs/engine/api/xr8/run). If any promises are returned, XR will wait on all promises before continuing.
[onCameraStatusChange](oncamerastatuschange.md) | Called when a change occurs during the camera permissions request.
[onCanvasSizeChange](oncanvassizechange.md) | Called when the canvas changes size.
[onDetach](ondetach.md) | is called after the last time a module receives frame updates. This is either after the engine is stopped or the module is manually removed from the pipeline, whichever comes first.
[onDeviceOrientationChange](ondeviceorientationchange.md) | Called when the device changes landscape/portrait orientation.
[onException](onexception.md) | Called when an error occurs in XR. Called with the error object.
[onPaused](onpaused.md) | Called when [`XR8.pause()`](/docs/engine/api/xr8/pause) is called.
[onProcessCpu](onprocesscpu.md) | Called to read results of GPU processing and return usable data.
[onProcessGpu](onprocessgpu.md) | Called to start GPU processing.
[onRemove](onremove.md) | is called when a module is removed from the pipeline.
[onRender](onrender.md) | Called after onUpdate. This is the time for the rendering engine to issue any WebGL drawing commands. If an application is providing its own run loop and is relying on [`XR8.runPreRender()`](/docs/engine/api/xr8/runprerender) and [`XR8.runPostRender()`](/docs/engine/api/xr8/runpostrender), this method is not called and all rendering must be coordinated by the external run loop.
[onResume](onresume.md) | Called when [`XR8.resume()`](/docs/engine/api/xr8/resume) is called.
[onStart](onstart.md) | Called when XR starts. First callback after [`XR8.run()`](/docs/engine/api/xr8/run) is called.
[onUpdate](onupdate.md) | Called to update the scene before render. Data returned by modules in [`onProcessGpu`](onprocessgpu.md) and [`onProcessCpu`](onprocesscpu.md) will be present as processGpu.modulename and processCpu.modulename where the name is given by module.name = "modulename".
[onVideoSizeChange](onvideosizechange.md) | Called when the canvas changes size.
[requiredPermissions](requiredpermissions.md) | Modules can indicate what browser capabilities they require that may need permissions requests. These can be used by the framework to request appropriate permissions if absent, or to create components that request the appropriate permissions before running XR.

Note: Camera modules that implement [`onProcessGpu`](onprocessgpu.md) or [`onProcessCpu`](onprocesscpu.md) can provide data to subsequent stages of the pipeline. This is done by the module's name.
