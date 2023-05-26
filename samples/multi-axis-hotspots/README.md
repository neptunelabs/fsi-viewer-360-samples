# Using FSI Viewer for 360° Image Zoom with Hotspots

This readme describes how a a 360° sample with Hotspots using *FSI Viewer* is achieved.
The aim of the demo is to show how you can easily integrate spin images with zoom and hotspots.

In order to display 360° zoom with FSI Viewer, you just need to add the following script

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/viewer/js/fsiviewer.js'
</script>
```
This will ensure that the FSI Viewer is loaded.

Next, you need to place the *<fsi-viewer>* tag you see in the Publish section where you want the viewer to appear.
In our example this looks like this:

```html
<fsi-viewer adaptiveuisize="false"
            forceinplacezoom="true"
            dir="images/samples/notebook_sphere/"
            cfg="samples/notebook.xml"
            autodisablepointeractions="true"
            progressbarheight="20"
            progressbarwidth="30"
            progressbarvalign="center"
            inplacezoom="true"
            nonav="false"
            skin="white"
            plugins="FullScreen,Resize"
            width="100%"
            height="600px"
            debug="false"
>
</fsi-viewer>
```
The difference between the normal 2D viewer and the 360 viewer is that the latter uses *dir* instead of *src*.
We set the skin to **skin="white"**, added **nonav="false"** and tweaked a few other things to our liking.

For all the parameters that can be used, please refer to the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

# Adding hotspots

The hotspots are loaded by setting **cfg="samples/notebook.xml"**.

We have a detailed tutorial on how to create hotspots for 360° images here: [Creating HotSpots for FSI Viewer](https://www.neptunelabs.com/fsi-viewer-js/creating-hotspots-for-fsi-viewer-js/)

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), first copy the env.yml.dist file to env.yml and edit the file, then restart the main demo.
