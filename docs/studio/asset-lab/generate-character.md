---
id: generate-characters
sidebar_position: 3
---

# Generate Animated Characters

Asset Lab currently supports rigging and animating **humanoid bipedal** 3D character models.

To generate a rigged and animated character model, you must first generate a 3D character model in an T-pose, from multiple images, to use as input. 

## Step 1: Generate Image Inputs

It is required to use GPT-Image-1 for generating image inputs for Animated characters.  See [Generate Images](/studio/asset-lab/generate-models) for more details.

Use **GPT-Image-1** to generate multi-view character images in a T-pose:
1. Front view  
2. Right, left, and back views  

Then click **Send to 3D Model**.

![](/images/studio/asset-lab/character-input.png)

## Step 2: Generate 3D Model

Select a supported 3D generation model. See [Generate 3D Models](/studio/asset-lab/generate-models) for more details.

Select the Generate button to process the request. 

![](/images/studio/asset-lab/character-generation.png)

Once complete, click **Send to Animation**.

## Step 3: Rig and Animate

Currently supports rigging via **Meshy**. Input must be a bipedal humanoid with clearly defined limbs.

Returns the following animation clips:
- Walk  
- Run  
- Idle  
- Jump  
- Attack  
- Death  
- Zombie Walk  
- Dance  

Click **Rig + Animate** to process (may take up to 2 minutes).

![](/images/studio/asset-lab/character-animation.png)

## Step 4: Import into Project

Use the import or download buttons to save your rigged model.  

![](/images/studio/asset-lab/character-import.png)

Filter for **Animated Characters** in the Library to find them.

![](/images/studio/asset-lab/character-library.png)

![](/images/studio/asset-lab/character-library2.png)