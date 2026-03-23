---
id: generate-models
sidebar_position: 2
---

# Generate 3D Models

To generate a 3D model (`.glb` format), you must first generate an image or multiple images to use as input. 3D models are generated from either a single image or multi-view image set. 

This process works best with individual subjects like objects or buildings, not entire scenes.

## Step 1: Generate Image Inputs

Begin by selecting a model using the dropdown menu. 

![](/images/studio/asset-lab/model-model.png)

Each model has different strengths, as well as a different credit price per request (displayed in the Generate button near the bottom). See credit price doc for full list of prices. 

Depending on which model you select to generate an image, you will have different input options. See Image Generation workflow for more details on available models and inputs. 

Use the toggle to generate either a single image (best for simple symmetrical objects) or the front view in multi image set (best for more complex or asymmetrical objects) 

If you select Single View, you generate one image of the object at a ¾ view.

![](/images/studio/asset-lab/model-single.png)

If you select Multi-View, you will first generate a view of the “front” of your object. If you are satisfied with the result, you can then generate the “right”, “left”, and “back” views of the same object using the Generate Multi-View button. For this step, it is required to use GPT-image-1.

![](/images/studio/asset-lab/model-multi.png)

Once you are satisfied with your image inputs, you can click the “Send to 3D Model” button in the bottom right to move to the next step.

## Step 2: Generate 3D Model

Select your desired model and adjust parameters as needed.

### Supported Models

**Trellis**  
Large-scale model by Microsoft for high-quality textured meshes.  
Inputs:  
- Single or multi-view images  
- Shape Guidance (0–10)  
- Detail Guidance (1–10)  
- Mesh Simplification (0.9–0.98)  
- Texture size: 512x512 or 1024x1024

**Hunyuan 3D-2**  
Tencent’s high-res asset generator.  
Inputs:  
- Single or multi-view images  
- Speed (Standard or Turbo)  
- Guidance (0–20)  
- Shape Detail (1–1024)

**Hunyuan 3D-2 Mini**  
Lower-resource variant of Hunyuan 3D-2.  
Inputs:  
- Single images only
- Speed (Standard or Turbo)  
- Guidance (0–20)  
- Shape Detail (1–1024)

Each model has different strengths, as well as a different credit price per request (displayed in the Generate button near the bottom). See credit price doc for full list of prices. 

_Select the Generate button to begin._

![](/images/studio/asset-lab/model-generate.png)

## Step 3: Import into Project or Download

Use the buttons at the bottom to import or download your 3D model.  

![](/images/studio/asset-lab/model-import.png)

You can access all of the assets generated from users in your workspace from the Library, available in the left tab of the full screen Asset Lab or in the left side panel tab in Studio. Use the filter option to display 3D models only. 

![](/images/studio/asset-lab/model-library.png)

![](/images/studio/asset-lab/model-library2.png)

