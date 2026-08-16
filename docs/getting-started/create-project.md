---
id: create-project
sidebar_position: 3
---

# Create or open a project

## Create a project

![StudioHome](/images/getting-started/studio-home.png)


1. From the hub view, click **New Project**
2. Enter the Project Title.
3. Select a template. Currently available templates are:
   - Empty: Minimal scene, no AR integration configured
   - World Effects: Place content in the world, with tap to place behavior
   - Image Targets: Multiple examples of image target usage
   - Face Effects: Attach virtual content to faces
   - Physics Playground: Complex scene with cross-platform input examples
4. Click **Create**.

![StudioCreate](/images/getting-started/studio-create.png)

## Open a project

:::tip
If you've downloaded a .zip file from the [Github Examples](https://github.com/8thwall/8thwall/tree/main/examples) for example, make sure to unzip it and move the contents to the folder in which you'd like to work.
:::



1. From the hub view, click **Open**
2. Select the root folder of the project

![Screenshot of folder select dialog with a project selected](/images/getting-started/open-project.png)


## Project Actions

In the Studio hub view, you can move, delete, and find projects using the Project Actions menu `(...)` button next to each project:
- **Reveal in finder**: opens your local file browser to project’s location
- **Remove from list**: remove the project from the list, leaving the files on disk untouched
- **Change disk location**: opens your file browser to select a new folder location for your project to move to

## Project Structure

When you create or open a project for the first time, a local version of the project is added on your machine within `~/Documents/8th Wall/`. By default, the 8th Wall folder is created within your `Documents` folder, but you can change this by moving the 8th Wall folder to another location if preferred.

The folder created for your project will include certain files and folders by default. The `src` folder mirrors the Project file directory you see in Studio. This folder is a directory within your project's file structure where you store files like component scripts, as well as assets like images, fonts, sounds, or other media that your project needs.

![](/images/studio/app/project-directories.jpg)

:::warning
Do not attempt to copy these files to another server. To publish and share your experience, see [documentation on publishing your project](/docs/getting-started/publishing).
:::
