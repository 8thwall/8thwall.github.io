Property | Type | Default | Description
| :- | :- | :- | :- |
| r | `number` | `0` | Red channel value of the material. A value between 0 and 255. |
| g | `number` | `0` | Green channel value of the material. A value between 0 and 255. |
| b | `number` | `0` | Blue channel value of the material. A value between 0 and 255. |
| textureSrc | `string` | `''` | The color map source, modulated by color (if set) |
| opacity | `number` | `1` | Overall alpha/transparency of the material. A value between 0 and 1. |
| side | `string` | `'front'` | Which sides of faces will be rendered. Allowed values: `'front'`, `'back'`, or `'double'`. |
| opacityMap | `string` | `''` | Alpha/transparency mapped via a texture resource |
| blending | `string` | `'normal'` | Blending to use when displaying objects with this material. Allowed values: `'no'`, `'normal'`, `'additive'`, `'subtractive'`, `'multiply'`. |
| repeatX | `number` | `1` | How many times a texture is repeated across a material on the X axis |
| repeatY | `number` | `1` | How many times a texture is repeated across a material on the Y axis |
| offsetX | `number` | `0` | How much a texture is offset across a material on the X axis |
| offsetY | `number` | `0` | How much a texture is offset across a material on the Y axis |
| wrap | `string` | `'repeat'` | Wrapping mode for textures. Allowed values: `'clamp'`, `'repeat'`, `'mirroredRepeat'`. |
| depthTest | `boolean` | `true` | Whether to test depth when rendering this material |
| depthWrite | `boolean` | `true` | Whether rendering this material impacts the depth buffer |
| wireframe | `boolean` | `false` | Render geometry as wireframe |
| forceTransparent | `boolean` | `false` | Whether to force the alpha channel to render as transparent |
| textureFiltering | `string` | `'smooth'` | Texture filtering mode. Allowed values: `'smooth'`, `'sharp'`. |
| mipmaps | `boolean` | `true` | Whether to generate mipmaps for textures |
