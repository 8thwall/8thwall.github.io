Property | Type | Default | Description
| :- | :- | :- | :- |
| landColor | `string` | `'#AEC988'` | Color of land as a hexadecimal code |
| landOpacity | `number` | `1` | Opacity range of land (0.0 - 1.0) |
| landVisibility | `boolean` | `true` | Visibility of land |
| buildingColor | `string` | `'#EFEFEA'` | Color of buildings as a hexadecimal code |
| buildingOpacity | `number` | `0.4` | Opacity range of buildings (0.0 - 1.0) |
| buildingMinMeters | `number` | `6` | Min height of buildings in meters |
| buildingMaxMeters | `number` | `6` | Max height of buildings in meters |
| buildingVisibility | `boolean` | `true` | Visibility of buildings |
| buildingBase | `number` | `0.014` | Height of the bottom of buildings, offset from land |
| parkColor | `string` | `'#80B063'` | Color of parks as a hexadecimal code |
| parkOpacity | `number` | `1` | Opacity range of parks (0.0 - 1.0) |
| parkVisibility | `boolean` | `true` | Visibility of park as a checkbox |
| parkBase | `number` | `0.002` | Height of the park, offset from land |
| parkingColor | `string` | `'#84A172'` | Color of parking lots as a hexadecimal code |
| parkingOpacity | `number` | `1` | Opacity range of parking lots (0.0 - 1.0) |
| parkingVisibility | `boolean` | `true` | Visibility of parking lots |
| parkingBase | `number` | `0.008` | Height of parking lots, offset from land |
| transitColor | `string` | `'#F9F8C7'` | Color of transit lines as a hexadecimal code |
| transitOpacity | `number` | `1` | Opacity range of transit lines (0.0 - 1.0) |
| transitVisibility | `boolean` | `true` | Visibility of transit lines |
| transitMeters | `number` | `8` | Width in meters of transit lines |
| transitBase | `number` | `0.012` | Height of transit lines, offset from land |
| transitMin | `number` | `0` | Minimum mapping system unit width of transit lines, when zooming out |
| roadColor | `string` | `'#DCE1DE'` | Color of roads as a hexadecimal code |
| roadOpacity | `number` | `1` | Opacity range of roads (0.0 - 1.0) |
| roadVisibility | `boolean` | `true` | Visibility of roads |
| roadSMeters | `number` | `2` | Width in meters of S Roads |
| roadMMeters | `number` | `4` | Width in meters of M Roads |
| roadLMeters | `number` | `8` | Width in meters of L Roads |
| roadXLMeters | `number` | `32` | Width in meters of XL Roads |
| roadSMin | `number` | `0` | Minimum mapping system unit width of S roads, when zooming out |
| roadMMin | `number` | `0` | Minimum mapping system unit width of M roads, when zooming out |
| roadLMin | `number` | `0` | Minimum mapping system unit width of L roads, when zooming out |
| roadXLMin | `number` | `0` | Minimum mapping system unit width of XL roads, when zooming out |
| roadBase | `number` | `0.01` | Height of roads, offset from land |
| sandColor | `string` | `'#AC92A6'` | Color of sand as a hexadecimal code |
| sandOpacity | `number` | `1` | Opacity range of sand (0.0 - 1.0) |
| sandVisibility | `boolean` | `true` | Visibility of sand |
| sandBase | `number` | `0.004` | Height of sand, offset from land |
| waterColor | `string` | `'#A0D3D3'` | Color of waterways as a hexadecimal code |
| waterOpacity | `number` | `1` | Opacity range of waterways (0.0 - 1.0) |
| waterVisibility | `boolean` | `true` | Visibility of waterways |
| waterMeters | `number` | `6` | Width in meters of waterways |
| waterBase | `number` | `0.006` | Height of waterways, offset from land |
| waterMin | `number` | `0` | Minimum mapping system unit width of waterways, when zooming out |
| lod | `number` | `1` | Level of detail. LOD higher than 1 will render less tile data (lower detail), while LOD lower than 1 will render more tile data (higher detail). LOD should be greater than 0. |
