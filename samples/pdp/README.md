# Using FSI Viewer for 360° Image Zoom

This readme describes how a simple detail page 360° sample with *FSI Viewer* is achieved.
The aim of the demo is to show how you can easily integrate spin images with zoom by just adding
a simple viewer tag.

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
<fsi-viewer
  id="fsi-viewer"
  dir="images/samples/Shoe/View2"
  width="100%"
  height="100%"
  plugins="resize,fullScreen"
  skin="example.css"
>
</fsi-viewer>
```
The difference between the normal 2D viewer and the 360 viewer is that the latter uses *dir* instead of *src*.
We have chosen a more suitable skin called **example.css**.

For all the parameters that can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), first copy the env.yml.dist file to env.yml and adjust the file, then restart the main demo.
