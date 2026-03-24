---
id: progressive-web-apps
sidebar_position: 8
---

# Progressive Web Apps

Progressive Web Apps (PWAs) use modern web capabilities to offer users an experience that's similar
to a native application. The 8th Wall Cloud Editor allows you to create a PWA version of your
project so that users can add it to their home screen. Users must be **connected to the internet**
in order to access it.

To enable PWA support for your WebAR project:

1. Visit your project settings page, and expand the “Progressive Web App” pane. (Only visible to paid workspaces)
2. Toggle the slider to Enable PWA support.
3. Customize your PWA name, icon, and colors.
4. Click "Save"

**Note**: For Cloud Editor projects, you may be prompted to build & re-publish your project if it
was previously published. If you decide not to republish, PWA support will be included the next
time your project is built.

## PWA API Reference {#pwa-api-reference}

8th Wall's **XRExtras** library provides an API to automatically display an install prompt in your web app.

Please refer to the `PwaInstaller` API reference at <https://github.com/8thwall/web/tree/master/xrextras/src/pwainstallermodule>

## PWA Icon Requirements {#pwa-icon-requirements}

* File Types: **.png**
* Aspect Ratio: **1:1**
* Dimensions:
  * Minimum: **512 x 512 pixels**
    * Note: If you upload an image larger than 512x512, it will be cropped to a 1:1 aspect ratio and resized down to 512x512.

## PWA Install Prompt Customization {#pwa-install-prompt-customization}

The [PwaInstaller](https://github.com/8thwall/web/tree/master/xrextras/src/pwainstallermodule)
module from XRExtras displays an install prompt asking your user to add your web app to their home
screen.

To customize the look of your install prompt, you can provide custom string values through the
[XRExtras.PwaInstaller.configure()](https://github.com/8thwall/web/tree/master/xrextras/src/pwainstallermodule#configure) API.

For a completely custom install prompt, configure the installer with
[displayInstallPrompt](https://github.com/8thwall/web/tree/master/xrextras/src/pwainstallermodule#displayinstallprompt)
and
[hideInstallPrompt](https://github.com/8thwall/web/tree/master/xrextras/src/pwainstallermodule#hideinstallprompt)

## Self-Hosted PWA Usage {#self-hosted-pwa-usage}

For Self-Hosted apps, we aren’t able to automatically inject details of the PWA into the HTML,
requiring use of the configure API with the name and icon they’d like to appear in the install
prompt.

Add the following `<meta>` tags to the `<head>` of your html:

`<meta name="8thwall:pwa_name" content="My PWA Name">`

`<meta name="8thwall:pwa_icon" content="//cdn.mydomain.com/my_icon.png">`

## PWA Code Examples {#pwa-code-examples}

#### Basic Example (AFrame) {#basic-example-aframe}

```html
<a-scene
  xrextras-almost-there
  xrextras-loading
  xrextras-runtime-error
  xrextras-pwa-installer
  xrweb>
```

#### Basic Example (Non-AFrame) {#basic-example-non-aframe}

```javascript
XR8.addCameraPipelineModules([
  XR8.GlTextureRenderer.pipelineModule(),
  XR8.Threejs.pipelineModule(),
  XR8.XrController.pipelineModule(),
  XRExtras.AlmostThere.pipelineModule(),
  XRExtras.FullWindowCanvas.pipelineModule(),
  XRExtras.Loading.pipelineModule(),
  XRExtras.RuntimeError.pipelineModule(),

  XRExtras.PwaInstaller.pipelineModule(), // Added here

  // Custom pipeline modules.
  myCustomPipelineModule(),
])

```

#### Customized Look Example (AFrame) {#customized-look-example-aframe}

```html
<a-scene
  xrextras-gesture-detector
  xrextras-almost-there
  xrextras-loading
  xrextras-runtime-error
  xrextras-pwa-installer="name: My Cool PWA;
    iconSrc: '//cdn.8thwall.com/my_custom_icon';
    installTitle: 'My CustomTitle';
    installSubtitle: 'My Custom Subtitle';
    installButtonText: 'Custom Install';
    iosInstallText: 'Custom iOS Install'"
  xrweb>
```

#### Customized Look Example (Non-AFrame) {#customized-look-example-non-aframe}

```javascript
XRExtras.PwaInstaller.configure({
  displayConfig: {
    name: 'My Custom PWA Name',
    iconSrc: '//cdn.8thwall.com/my_custom_icon',
    installTitle: ' My Custom Title',
    installSubtitle: 'My Custom Subtitle',
    installButtonText: 'Custom Install',
    iosInstallText: 'Custom iOS Install',
  }
})
```

#### Customized Display Time Example (AFrame) {#customized-display-time-example-aframe}

```html
<a-scene
  xrweb="disableWorldTracking: true"
  xrextras-gesture-detector
  xrextras-almost-there
  xrextras-loading
  xrextras-runtime-error
  xrextras-pwa-installer="minNumVisits: 5;
    displayAfterDismissalMillis: 86400000;"
>
```

#### Customized Display Time Example (Non-AFrame) {#customized-display-time-example-non-aframe}

```javascript
XRExtras.PwaInstaller.configure({
  promptConfig: {
    minNumVisits: 5, // Users must visit web app 5 times before prompt
    displayAfterDismissalMillis: 86400000 // One day
  }
})
```
