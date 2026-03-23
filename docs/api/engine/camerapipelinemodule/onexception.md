# onException()

`onException: (error)`

## Description {#description}

`onException()` is called when an error occurs in XR. Called with the error object.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
error | The error object that was thrown

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
    onException : (error) => {
      console.error('XR threw an exception', error)
  },
})
```
