# xrimagescanning

## Description {#description}

This event is emitted by [`xrweb`](/docs/engine/api/aframe/xrweb) when all detection images have been loaded and scanning has begun.

`imagescanning.detail : { imageTargets: {name, type, metadata, geometry} }`

Property  | Description
--------- | -----------
name | The image's name.
type | One of `'FLAT'`, `'CYLINDRICAL'`, `'CONICAL'`.
metadata | User metadata.
geometry | Object containing geometry data. If type=FLAT: `{scaledWidth, scaledHeight}`, lse if type=CYLINDRICAL or type=CONICAL: `{height, radiusTop, radiusBottom, arcStartRadians, arcLengthRadians}`

If type = `FLAT`, geometry:

Property  | Description
--------- | -----------
scaledWidth | The width of the image in the scene, when multiplied by scale.
scaledHeight | The height of the image in the scene, when multiplied by scale.

If type= `CYLINDRICAL` or `CONICAL`, geometry:

Property  | Description
--------- | -----------
height | Height of the curved target.
radiusTop | Radius of the curved target at the top.
radiusBottom | Radius of the curved target at the bottom.
arcStartRadians | Starting angle in radians.
arcLengthRadians | Central angle in radians.
