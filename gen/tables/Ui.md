Property | Type | Default | Description
| :- | :- | :- | :- |
| type | `string` | `'overlay'` | Allowed values: `'overlay'` , `'3d'` |
| font | `string` | `'Nunito'` | Font to use |
| fontSize | `number` | `16` | Size of the text |
| position | `string` | `'static'` | Allowed values: `'static'`, `'relative'`, `'absolute'` |
| opacity | `number` | `1` | Overall opacity of the object |
| backgroundOpacity | `number` | `-1` | Opacity of the background. -1 is interpreted as 0 if there is no image, and 1 if there is an image. |
| backgroundSize | `string` | `'contain'` | Sets the size of the background image. Allowed values: `'stretch'`, `'contain'`, `'cover'`, `'nineSlice'`. |
| background | `string` | `'#ffffff'` | Background color |
| borderColor | `string` | `'#000000'` | Color of the border |
| color | `string` | `'#ffffff'` | Foreground (text) color |
| text | `string` | `''` | Text content of the object |
| image | `string` | `''` | Image resource |
| fixedSize | `boolean` | `false` | Determines if size is fixed |
| width | `string` | `'100'` | Width of the object |
| height | `string` | `'100'` | Height of the object |
| top | `string` | `''` | Vertical position from top border |
| left | `string` | `''` | Horizontal position from left border |
| bottom | `string` | `''` | Vertical position from bottom border |
| right | `string` | `''` | Horizontal position from right border |
| borderRadius | `number` | `0` | Rounds all corners of the element |
| borderRadiusTopLeft | `string` | `''` | Rounds the top left corner of the element |
| borderRadiusTopRight | `string` | `''` | Rounds the top right corner of the element |
| borderRadiusBottomLeft | `string` | `''` | Rounds the bottom left corner of the element |
| borderRadiusBottomRight | `string` | `''` | Rounds the bottom right corner of the element |
| alignContent | `string` | `'flex-start'` | Distribution of space between content items. Allowed values: `'flex-start'`, `'center'`, `'flex-end'`, `'stretch'`, `'space-between'`, `'space-around'`. |
| alignItems | `string` | `'flex-start'` | Alignment of items on the cross axis. Allowed values: `'flex-start'`, `'center'`, `'flex-end'`, `'stretch'`, `'baseline'`. |
| alignSelf | `string` | `''` | Alignment of an individual flex item. Allowed values: `'auto'`, `'flex-start'`, `'center'`, `'flex-end'`, `'stretch'`, `'baseline'`. |
| borderWidth | `number` | `0` | Width of the border |
| columnGap | `string` | `''` | Gap between columns |
| direction | `string` | `'ltr'` | Text direction. Allowed values: `'inherit'`, `'ltr'`, `'rtl'`. |
| display | `string` | `''` | Display type of the element. Allowed values: `'flex'`, `'none'`. |
| flex | `number` | `0` | Flex grow, shrink, and basis shorthand |
| flexBasis | `string` | `''` | Initial main size of a flex item |
| flexDirection | `string` | `'row'` | Direction of flex items in the container. Allowed values: `'column'`, `'column-reverse'`, `'row'`, `'row-reverse'`. |
| flexGrow | `number` | `0` | Defines the ability for a flex item to grow |
| flexShrink | `number` | `0` | Defines the ability for a flex item to shrink |
| flexWrap | `string` | `'nowrap'` | Whether flex items wrap. Allowed values: `'no-wrap'`, `'wrap'`, `'wrap-reverse'`. |
| gap | `string` | `''` | Gap between flex items |
| justifyContent | `string` | `'flex-start'` | Alignment of items on the main axis. Allowed values: `'flex-start'`, `'center'`, `'flex-end'`, `'space-between'`, `'space-around'`, `'space-evenly'`. |
| margin | `string` | `''` | Margin for all sides around the element |
| marginBottom | `string` | `''` | Bottom margin |
| marginLeft | `string` | `''` | Left margin |
| marginRight | `string` | `''` | Right margin |
| marginTop | `string` | `''` | Top margin |
| maxHeight | `string` | `''` | Maximum height of the element |
| maxWidth | `string` | `''` | Maximum width of the element |
| minHeight | `string` | `''` | Minimum height of the element |
| minWidth | `string` | `''` | Minimum width of the element |
| overflow | `string` | `''` | How content that exceeds the element’s size is handled. Allowed values: `'visible'`, `'hidden'`, `'scroll'`. |
| padding | `string` | `''` | Padding for all sides inside the element |
| paddingBottom | `string` | `''` | Bottom padding |
| paddingLeft | `string` | `''` | Left padding |
| paddingRight | `string` | `''` | Right padding |
| paddingTop | `string` | `''` | Top padding |
| rowGap | `string` | `''` | Gap between rows |
| textAlign | `string` | `'center'` | Alignment of text within the element. Allowed values: `'left'`, `'right'`, `'center'`, `'justify'`. |
| stackingOrder | `number` | `0` | Determines the rendering order of UI elements. Elements with higher values are drawn above those with lower values. A value of 0 uses the default behavior, rendering elements according to their order in the scene hierarchy |
| ignoreRaycast | `boolean` | `false` | Determines whether the UI element should respond to user interactions like clicks or taps |
| nineSliceBorderTop | `string` | `'0'` | Size of the top border used in nine-slice scaling. Defines how much of the top portion is preserved without scaling. |
| nineSliceBorderBottom | `string` | `'0'` | Size of the bottom border used in nine-slice scaling. Defines how much of the bottom portion is preserved without scaling. |
| nineSliceBorderLeft | `string` | `'0'` | Size of the left border used in nine-slice scaling. Defines how much of the left portion is preserved without scaling. |
| nineSliceBorderRight | `string` | `'0'` | Size of the right border used in nine-slice scaling. Defines how much of the right portion is preserved without scaling. |
| nineSliceScaleFactor | `number` | `1` | Multiplier applied to the scaled center area in nine-slice backgrounds. Allows finer control over the scaling of the center portion. |
| verticalTextAlign | `string` | `'start'` | Vertical alignment of the text within the element |
