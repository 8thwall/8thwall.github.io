# XR

8th Wall's World Tracking, Image Target Tracking, and Face Effects are available to use visually within Studio.

There are three types of Cameras in Studio: 3D only, Face, and World. Each of these camera types
will have different settings. A Face or World Camera is necessary for AR experiences. To learn more
about creating and managing a Camera in your scene please see the [Camera](/studio/guides/camera)
section.

Studio provides tooling for working with XR in your project. For working with World Effects, Studio
provides 6DoF camera tracking and interfaces for configuring tracking. With Face Effects, Studio
provides a Face Mesh component to support configuring and testing your effect, as well as setting up
facial attachment points. A Face mesh component can be added via (+) button on the Hierarchy. Studio
also provides tooling for previewing XR experiences – see the Simulator section for learning more about
testing your XR project.

![AugmentedRealityAddFace](/images/studio/augmented-reality-add-face.png)

![AugmentedRealityFaceMesh](/images/studio/augmented-reality-face-mesh.png)

When previewing Face Effects in Studio, the face camera is placed at the origin (0, 0, 0) while
the face anchor is placed in front of the face camera as seen in the screenshot below.

![FaceEffectsCamera](/images/studio/xr-face-camera.png)

## XR API Reference {#xr-api-reference}

Please refer to the [Camera](/studio/api/ecs/camera) component APIs that define camera behavior.
