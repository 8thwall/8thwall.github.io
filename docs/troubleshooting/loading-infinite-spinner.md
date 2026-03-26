---
id: loading-infinite-spinner
sidebar_position: 3
---
# Loading Screen Infinite Spinner

#### Issue {#issue}

When accessing a WebAR experience, the page is stuck on the Loading screen with an "infinite spinner".

![loading-infinite-spinner](/images/troubleshooting/loading-infinite-spinner.jpg)

#### Why does this happen? {#why-does-this-happen}

If you are using the XRExtras `loading` module (which is included with all 8th Wall projects and
examples by default), the loading screen is displayed while the scene and assets are loading, and
while the browser is waiting for browser permissions to be accepted. If the scene takes a long time
to load, or if something prevents the scene from fully initializing, it can appears to be "stuck" on
this screen forever.

#### Potential Causes {#potential-causes}

1. Large Assets and/or Slow Internet Connection

If you are in a location with slow wifi and/or cellular service while attempting to load a Web AR
page with large assets, the scene may not really be "stuck", but rather just taking a long time to
load. Use the browser's Network inspector to see if your page is simply in process of downloading
assets.

Additionally, try to [optimize scene assets](/docs/getting-started/your-3d-models-on-the-web/#texture-optimization)
as much as possible.  This can include techniques such as compressing textures, reducing texture
and/or video resolution, and reducing the polygon count of 3D models.

2. Camera locked to a background tab

Some devices/browsers may not let you open the camera if it's already in use by another tab. Try
closing any other tabs that may be using the camera, then re-load the page.

3. iOS Safari specific: CSS elements push the video element "off the screen"

If you have added custom HTML/CSS elements to your Web AR experience, make sure that they are
properly overlaid on top of the scene. If the video element on the page is pushed off-screen, iOS
Safari won't render the video feed. This in turn triggers a series of events that make it appear as
if 8th Wall is "stuck".  In reality, here is what is going on:

Video feed doesn't render -> AFrame scene doesn't fully initialize -> AFrame scene never emits the
"loaded" event -> XRExtras Loading module never disappears (it's listening for the scene's "loading"
event which never fires!)

To resolve this, we recommend using the Safari inspector's "Layout" view to visualize the
positioning of your DOM content. Often times, you'll see something similar to the image below where
the video element is pushed "off the screen" / "below the fold".

![video-element-offscreen](/images/troubleshooting/video-element-offscreen.jpg)

To resolve, adjust the CSS positioning of your elements so they do not push the video feed off the
screen. Using `absolute` positioning is one way to do this.
