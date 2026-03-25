---
id: world-tracking-issues
description: I'm experiencing issues with World Tracking.
sidebar_position: 6
---

# World Tracking Issues

## Introduction
I'm experiencing issues with World Tracking.

## Why does this happen?

8th Wall’s World Tracking relies on real time analysis of the device camera feed, identifying **feature points** which are unique, trackable details used to determine where the "floor" or **ground plane** is.

It is **floor based only**, continuously recalculating a single horizontal plane (**Y = 0**) from the most stable set of feature points visible at any moment. If the surface is too uniform or lacks distinct features, tracking can be lost or the floor may be redefined incorrectly.

Unlike ARKit or ARCore, which can track multiple surfaces, 8th Wall detects and updates one ground plane dynamically. The **feature detection pipeline operates in grayscale**, using contrast and texture differences between light and dark areas rather than color. High contrast, detail rich surfaces work best, while smooth, low contrast ones, regardless of color, provide poor results.

Common causes of poor tracking include

* Repetitive patterns such as brick walls, wood planks, or floor tiles
* Low grayscale contrast such as plain carpets, smooth concrete, or single color floors
* Shiny, reflective, or translucent surfaces
* Rapid camera movement or motion blur
* Sudden lighting changes
* Multiple surfaces in view such as a table and floor together
* Tight or cluttered spaces with limited open area

## How do I fix it?

1. **Choose a feature rich surface**
   * Use surfaces with irregular patterns and varied light and dark contrast such as cracks in concrete, grass, gravel, or patterned rugs.

2. **Avoid repeating patterns**
   * Similar looking elements like bricks or planks can confuse detection.

3. **Ensure good lighting**
   * Use even lighting without glare or heavy shadows.

4. **Minimize rapid camera movement**
   * Move slowly, especially at startup, to establish stable tracking.

5. **Keep only one surface in view**
   * Frame the target surface without other horizontal planes intruding.

6. **Give AR content enough space**
   * Use an area large enough for your content, free of close obstacles.

7. **Re scan if needed**
   * Point the camera at a feature rich surface for a few seconds or call `XR8.XrController.recenter()` to reset tracking.

## How do I improve the End User Experience?

1. **Add a Re Center Button**
   * Lets users reset tracking to the current camera view, helpful if they started on a poor surface, without reloading the page.

2. **Position content fully above Y = 0**
   * Ensure models sit entirely above the ground plane. Adjust pivot points or reposition models so no part appears below the floor.
