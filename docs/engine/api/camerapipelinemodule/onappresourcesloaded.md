# onAppResourcesLoaded()

`onAppResourcesLoaded: ({ framework, imageTargets, version })`

## Description {#description}

`onAppResourcesLoaded()` is called when we have received the resources attached to an app from the server.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
framework | The framework bindings for this module for dispatching events.
imageTargets [Optional]| An array of image targets with the fields {imagePath, metadata, name}
version | The engine version, e.g. 14.0.8.949

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name = 'myPipelineModule',
  onAppResourcesLoaded = ({ framework, version, imageTargets }) => {
    //...
  },
})
```
