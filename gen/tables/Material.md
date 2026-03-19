Property | Type | Default | Description
| :- | :- | :- | :- |
| r | `number` | `0` | Red channel value of the material. A value between 0 and 255. |
| g | `number` | `0` | Green channel value of the material. A value between 0 and 255. |
| b | `number` | `0` | Blue channel value of the material. A value between 0 and 255. |
| textureSrc | `string` | `''` | The color map source, modulated by color (if set) |
| roughness | `number` | `0.5` | How rough the material appears. A value between 0 and 1. |
| roughnessMap | `string` | `''` | This texture map resource, affects how rough the material appears |
| metalness | `number` | `0.5` | How metallic the material appears. A value between 0 and 1. |
| metalnessMap | `string` | `''` | This texture resource affects how metal the material appears |
| normalScale | `number` | `1` | How much the normal map (if set) affects the material. A value between 0 and 1. |
| normalMap | `string` | `''` | Normal map source of the texture |
| opacity | `number` | `1` | Overall alpha/transparency of the material. A value between 0 and 1. |
| opacityMap | `string` | `''` | Alpha/transparency mapped via a texture resource |
| emissiveIntensity | `number` | `0` | Overall intensity of the emissive map. A value between 0 and 1. |
| emissiveMap | `string` | `''` | Emissive strength mapped as a texture resource. Modulated by emissive color and intensity. |
| emissiveR | `number` | `0` | Red channel emissive color of the material. A value between 0 and 255. |
| emissiveG | `number` | `0` | Green channel emissive color of the material. A value between 0 and 255. |
| emissiveB | `number` | `0` | Blue channel emissive color of the material. A value between 0 and 255. |
| side | `string` | `'front'` | Which sides of faces will be rendered. Allowed values: `'front'`, `'back'`, `'double'`. |
| blending | `string` | `'normal'` | Blending to use when displaying objects with this material. Allowed values: `'no'`, `'normal'`, `'additive'`, `'subtractive'`, `'multiply'`. |
| repeatX | `number` | `1` | How many times a texture is repeated across a material on the X axis |
| repeatY | `number` | `1` | How many times a texture is repeated across a material on the Y axis |
| offsetX | `number` | `0` | How much a texture is offset across a material on the X axis |
| offsetY | `number` | `0` | How much a texture is offset across a material on the Y axis |
| depthTest | `boolean` | `true` | Whether to test depth when rendering this material |
| depthWrite | `boolean` | `true` | Whether rendering this material impacts the depth buffer |
| wireframe | `boolean` | `false` | Render geometry as wireframe |
| forceTransparent | `boolean` | `false` | Whether to force the alpha channel to render as transparent |
| mipmaps | `boolean` | `true` | Whether to generate mipmaps for textures |
| textureFiltering | `string` | `'smooth'` | Texture filtering mode. Allowed values: `'smooth'` or `'sharp'`. |
| wrap | `string` | `'repeat'` | Wrapping mode for textures. Allowed values: `'clamp'`, `'repeat'`, `'mirroredRepeat'`. |
