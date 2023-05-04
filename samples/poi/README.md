# Using FSI Viewer for 360° Image Zoom - Points Of Interest

This readme describes how a simple example of a 360° detail page including points of interest is achieved with *FSI Viewer*.
The aim of the demo is to show how you can easily integrate spin images with zoom by just adding a simple viewer tag.
The points of interest are achieved using the FSI ThumbBar.


In order to display 360° zoom with FSI Viewer, you just need to add the follwoing script to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/viewer/js/fsiviewer.js'
</script>
```
This will ensure that the FSI Viewer is loaded.

Next, you need to place the *<fsi-viewer>* tag you see in the Publish section where you want the viewer to appear.
In our example this looks like this:

```html
   <fsi-viewer
  id="FSI_EDBeF84CxSVR"
  width="80%"
  height="100%"
  ir="/images/samples/cruiser/"
  backgroundColor="#f8f9fa"
  cfg="showcase_presets/showcase-cruiser.xml"
  plugins="Resize,FullScreen">
</fsi-viewer>
```

The difference between the normal 2D viewer and the 360° viewer is that the latter uses *dir* instead of *src*.

Now we want to have some points of interest. This is achieved by setting them in an XML configuration.
This is discussed in a tutorial on our website: [Points Of Interest Tutorial](https://www.neptunelabs.com/fsi-viewer-js/multiple-spins-showcase/).

The resulting viewer with thumbbar looks like this:

```html
<div id="Container_FSI_EDBeF84CxSVR" style="position:relative;width:100%;height:700px;box-sizing:border-box;padding-right:200px;">
          <fsi-viewer id="FSI_EDBeF84CxSVR" width="80%" height="100%" debug="true" dir="/images/samples/cruiser/" backgroundColor="#f8f9fa" cfg="showcase_presets/showcase-cruiser.xml" plugins="Resize,FullScreen" fullScreenElement="Container_FSI_EDBeF84CxSVR">
          </fsi-viewer>
          <fsi-thumbbar viewerSelector="FSI_EDBeF84CxSVR" width="20%" height="100%" debug="true" style="position:absolute;bottom:0px;height:100%;width:200px;left:728px; text-align: center" cfg="showcase_presets/showcase-cruiser.xml" autoElementSpacing="true" elementWidth="20%" vertical="true"></fsi-thumbbar>
        </div>
```

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
