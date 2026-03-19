---
id: your-3d-models-on-the-web
---

# Your 3D Models on the Web

We recommend using 3D models in GLB (glTF 2.0 binary) format for all WebAR experiences. GLB is
currently the best format for WebAR with its small file size, great performance and versatile
feature support (PBR, animations, etc).

## Converting Models to GLB format {#converting-models-to-glb}

Before you export, ensure that:

* Pivot point is at the base of the model (if you expect it to attach to the ground)
* Forward vector of object is along Z axis (if you expect it to face forward)

If your model is exported as a glTF, drag and drop the glTF folder into
[gltf.report](https://gltf.report) and click _Export_ to convert it to a GLB.

If your model can not be exported to glTF/GLB from 3D modeling software, import it in Blender and
export as gLTF or use a converter.

**Online converters**: [Creators3D](https://www.creators3d.com/online-viewer), [Boxshot](https://boxshot.com/facebook-3d-converter/)

**Native converters**: [Maya2glTF](https://github.com/iimachines/Maya2glTF), [3DS Max](https://doc.babylonjs.com/features/featuresDeepDive/Exporters/3DSMax)

A full list of converters can be found at <https://github.com/khronosgroup/gltf#gltf-tools>.

It's a good idea to view the model in [glTF Viewer](https://gltf-viewer.donmccurdy.com/) before
importing it to an 8th Wall project. This will help catch any issues with your model prior to adding
it to an 8th Wall project.

After you import into an 8th Wall project, ensure that:

* Scale appears correct at (1, 1, 1). If scale is off by a significant amount (i.e. 0.0001 or
10000), do not change the scale in code. Instead, change it in your modeling software and
re-import. Changing the scale significantly in code may result in clipping issues with the model.
* Materials appear correct. If your model has reflective materials, they may appear black unless
given something to reflect. See the
[reflections sample project](https://www.8thwall.com/8thwall/cubemap-aframe) and/or the
[glass sample project](https://www.8thwall.com/playground/glass-materials-aframe)

For more information about 3D model best practices, reference the [GLB optimization section](#glb-optimization).

Please also view the [5 Tips for Developers to Make Any 8th Wall WebAR Project More Realistic](https://www.8thwall.com/blog/post/41447089034/5-tips-for-developers-to-make-any-8th-wall-webar-project-more-realistic) blog post.

### Converting FBX to GLB {#converting-fbx-to-glb}

The following instructions will explain how to install and run the Facebook-developed [FBX2glTF CLI conversion tool](https://github.com/facebookincubator/FBX2glTF) locally on your Mac. This tool is by far the most reliable tool any one of us at 8th Wall have used yet for FBX to GLB conversion and we have used it for all our first party content to date.

**Installing FBX2glTF on your Mac**

1. Download this file: https://github.com/facebookincubator/FBX2glTF/releases/download/v0.9.7/FBX2glTF-darwin-x64
2. Open Terminal
3. Navigate to the Downloads folder: `cd ~/Downloads`
4. Make the file executable: `chmod +x FBX2glTF-darwin-x64`
5. If you see a warning about the downloaded file, simply click `Cancel`

![macos-warning-1](/images/macos-download-warning-fbx2gltf-1.jpg)

6. Open `System Preferences` -> `Security & Privacy`, click the `Lock` icon and then enter your `macOS password`.

![macos-security-and-privacy](/images/macos-security-and-privacy.jpg)

7. Click `Allow Anyway`
8. Close System Preferences.
9. Return to the Terminal window
10. Re-run the previous command (pressing the Up arrow should restore the previous command): `chmod +x FBX2glTF-darwin-x64`
11. An updated warning will be displayed, click `Open`:

![macos-warning-2](/images/macos-download-warning-fbx2gltf-2.jpg)

12. At this point you should be able to successfully run the FBX2glTF

**Copy FBX2glTF to a system directory (Optional)**

To make it easier to run the FBX2glTF converter, copy it into the /usr/local/bin directory. This eliminates the need to navigate to the Downloads folder each time to run the command.

1. From the Downloads folder, run `sudo cp ./FBX2glTF-darwin-x64 /usr/local/bin`
2. The system will likely ask for your macOS password. Type it in and press `Enter`
3. Since `/usr/local/bin` should be in your PATH by default, you can now simply run
`FBX2glTF-darwin-x64` from any directory.

**Running FBX2glTF on your Mac**

1. In Terminal, navigate to the folder where your fbx files are located. Here are some helpful
commands for traversing directories via command line on macOS:
  * `pwd` outputs the current directory of the terminal.
  * `ls` lists the contents of the current directlory.
  * `cd` changes directory, and takes either a relative (e.g `cd ~/Downloads`) or absolute path (e.g. `cd /var/tmp`)

2. Run the `FBX2glTF-darwin-x64` and pass in parameters for input (-i) and output (-o) files.

#### FBX2glTF Example {#fbx2gltf-example}

```bash
FBX2glTF-darwin-x64 -i yourfile.fbx -o newfile.glb
```

3. The above example will convert `yourfile.fbx` into a new GLB file named `newfile.glb`
4. Drag and Drop the newly created GLB file into https://gltf-viewer.donmccurdy.com/ to verify it
works correctly.
5. For advanced configuration of the glb conversion, check out the following commands:
https://github.com/facebookincubator/FBX2glTF#cli-switches

**FBX2glTF Batch Conversion**

If you have multiple FBX files in the same directory, you can convert them all at once

1. In Terminal, navigate to the folder containing multiple FBX files
2. Run the following command:

#### FBX2glTF Batch Conversion Example {#fbx2gltf-batch-conversion-example}

```bash
ls *.fbx | xargs -n1 -I {} FBX2glTF-darwin-x64  -i {} -o {}.glb
```

3. This should produce glb versions of each fbx file you have in the current folder!

## GLB Optimization {#glb-optimization}

Optimizing assets is a critical step to creating magical WebAR content. Large assets can lead to
issues such as infinite loading, black textures, and crashes.

### Texture Optimization {#texture-optimization}

Textures are usually the biggest contributor to large file sizes, it’s a good idea to optimize these
first.

For best results, we suggest using textures 1024x1024 or smaller. Texture sizes should always be set
to the power of two (512x512, 1024x1024, etc).

This can be done using your favorite image editing and/or 3D modeling program; however, if you
already have an existing GLB model, a quick and easy way to resize the textures within the 3D model
is to use [gltf.report](https://gltf.report)

* Drag your 3D model onto the page.  In the left column, set the maximum desired texture size (1).
* Click play (2) to run the script. The Console (lower left) will display status of the operation.
* Download your modified GLB model by clicking Export (3)

![gltf-report](/images/gltf-report.jpg)

### Compression {#compression}

Compression can greatly reduce file size. Draco compression is the most popular compression method
and can be configured in Blender export settings or after exporting in
[gltf.report](https://gltf.report).

Loading compressed models to your project requires additional configuration. Reference the
[A-Frame sample project](https://www.8thwall.com/playground/draco-compression) or the
[three.js sample project](https://www.8thwall.com/playground/draco-threejs) for more information.

### Geometry Optimization {#geometry-optimization}

For further optimization, decimate the model to reduce polygon count.

In Blender, apply the _Decimate_ modifier to the model and reduce the _Ratio_ setting to a value under 1.

Select _Apply Modifiers_ in the export settings.

### Optimization Tutorial {#optimization-tutorial}

````mdx-code-block
<iframe width="560" height="315" src="https://www.youtube.com/embed/1ToEPOHN1no" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

````
