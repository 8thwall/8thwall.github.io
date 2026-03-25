---
id: advanced-analytics
sidebar_position: 5
---

# Advanced Analytics

The process for adding analytics to a project is the same as adding them to any non-AR
website.  You are welcome to use any analytics solution you prefer.

In this example, we’ll explain how to add Google Analytics to your 8th Wall project using Google Tag
Manager (GTM) - making it easy to collect custom analytics on how users are both viewing and
interacting with your project.

Using GTM’s web-based user interface, you can define tags and create triggers that cause your tag to
fire when certain events occur. In your 8th Wall project, fire events (using a single line of
Javascript) at desired places in your code.

## Analytics Pre-requisites {#analytics-pre-requisites}

You must already have Google Analytics and Google Tag Manager accounts and have a basic understanding of how they work.

For more information, please refer to the following Google documentation:

* Google Analytics 4
  * Getting Started: <https://support.google.com/analytics/answer/9304153>
  * Add a Data Stream: <https://support.google.com/analytics/answer/9304153#stream>
* Google Tag Manager
  * Overview: <https://support.google.com/tagmanager/answer/6102821>
  * Setup and Install: <https://support.google.com/tagmanager/answer/6103696>

## Add Google Tag Manager to your 8th Wall Project {#add-google-tag-manager-to-your-8th-wall-project}

1. On the Workspace page of your Tag Manager container, click your container ID (e.g.
"**GTM-XXXXXX**") to open the "Install Google Tag Manager" box.  This window contains the code that
you’ll later need to add to your 8th Wall project.

![GTM1](/images/gtm1.jpg)

2. Open your project code and paste the **top** code block into the `<head>` of `index.html`.

3. Paste the contents of the **bottom** code block into the `<body>` of `index.html`.

## Configure Google Tag Manager {#configure-google-tag-manager}

1. Locate the [Google Measurement ID](https://support.google.com/analytics/answer/12270356) for your data stream.
2. In GTM, [create a GA4 Configuration](https://support.google.com/tagmanager/answer/9442095#config) tag.

Example:

![GTM8](/images/gtm8.jpg)

## Tracking Page Views {#tracking-page-views}
Page views will be automatically tracked through the GA4 Configuration tag. See the [Configure Google Tag Manager](#configure-google-tag-manager) for more information.

## Tracking Custom Events {#tracking-custom-events}

GTM also provides the ability to fire events when custom actions take place **inside** the WebAR
experience. These events will be particular to your WebAR project, but some examples might be:

* 3D object placed
* Image Target found
* Screenshot taken
* etc…

In this example, we’ll create a Tag (with Trigger) and add it to the
["AFrame: Place Ground"](https://www.8thwall.com/8thwall/placeground-aframe) sample project that
fires each time a 3D model is spawned.

#### Create Custom Event Trigger {#create-custom-event-trigger}

* Trigger Type: **Custom Event**
* Event Name: **placeModel**
* This trigger fires on: **All Custom Events**

![GTM6](/images/gtm6.jpg)

#### Create Tag {#create-tag-1}

Next, create a tag that will fire when the "placeModel" trigger is fired in your code.

* Tag Type: **Google Analytics: GA4 Event**
* Configuration Tag: (Select configuration created previously)
* Event Name: **Place Model**
* Triggering: **Select "placeModel" trigger created in the previous step.**

![GTM9](/images/gtm9.jpg)

**IMPORTANT**:  Make sure to save all triggers/tags created and then **Submit/Publish** your
settings inside the GTM interface so they are live. See <https://support.google.com/tagmanager/answer/6107163>

#### Fire Event Inside 8th Wall Project {#fire-event-inside-8th-wall-project}

In your 8th Wall project, add the following line of javascript to fire this trigger at the desired place in your code:

`window.dataLayer.push({event: 'placeModel'})`

##### Example - based on <https://www.8thwall.com/8thwall/placeground-aframe/master/tap-place.js> {#example---based-on-httpswww8thwallcom8thwallplaceground-aframemastertap-placejs}

```javascript
export const tapPlaceComponent = {
  init: function() {
    const ground = document.getElementById('ground')
    ground.addEventListener('click', event => {
      // Create new entity for the new object
      const newElement = document.createElement('a-entity')

      // The raycaster gives a location of the touch in the scene
      const touchPoint = event.detail.intersection.point
      newElement.setAttribute('position', touchPoint)

      const randomYRotation = Math.random() * 360
      newElement.setAttribute('rotation', '0 ' + randomYRotation + ' 0')

      newElement.setAttribute('visible', 'false')
      newElement.setAttribute('scale', '0.0001 0.0001 0.0001')

      newElement.setAttribute('shadow', {
        receive: false,
      })

      newElement.setAttribute('class', 'cantap')
      newElement.setAttribute('hold-drag', '')

      newElement.setAttribute('gltf-model', '#treeModel')
      this.el.sceneEl.appendChild(newElement)

      newElement.addEventListener('model-loaded', () => {
        // Once the model is loaded, we are ready to show it popping in using an animation
        newElement.setAttribute('visible', 'true')
        newElement.setAttribute('animation', {
          property: 'scale',
          to: '7 7 7',
          easing: 'easeOutElastic',
          dur: 800,
        })

        // **************************************************
        // Fire Google Tag Manager event once model is loaded
        // **************************************************
        window.dataLayer.push({event: 'placeModel'})
      })
    })
  }
}
```
