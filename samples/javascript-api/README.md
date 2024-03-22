# JS API Sample

FSI Viewer contains an extensive JS API with methods and callbacks that you can use.
You can find [an overview of all available parameters in the corresponding documentation](https://docs.neptunelabs.com/docs/fsi-viewer/js-api/public-methods).

This example is a simple demonstration of how to use these methods and callbacks.

To display a spin with FSI Viewer, all you need to do is add the following script to the top of your web page:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/viewer/js/fsiviewer.js'
</script>
```
This will ensure that the FSI Viewer is loaded.

Normally you would need to place the *<fsi-viewer>* tag in your source code where you want the viewer to be displayed.

In this example, we only want to display the viewer in place of an image when a button is clicked. The view will then be zoomed, reset and the auto-rotation is started.
This means that the viewer is initialised by JavaScript.

To do this, we have created this part in the body:

```html
<div class="col productContainer" id="productContainer">
  <img id="zoomImg" src="{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/Shoe/View2/sneaker-both-13.jpg&width=640&height=397&effects=pad(CC,FFFFFF)" height="397" alt="">
  <div class="zoomContainer" id="zoomEle">
  </div>
  <button type="button" id="zoomBtn" class="btn btn-lg btn-outline-dark">Show Zoom</button>
</div>
```
`productContainer` is the div that contains all the elements.
`zoomImg` is the image that will be displayed on load and replaced by the viewer.
The `zoomEle` div will contain the FSI viewer.
The `zoomBtn` button is used to switch from the image to the viewer.

In the corresponding `style.css` the image and button are placed  above the viewer div with `z-index`:

```css
.productContainer .img {
  z-index: 10;
  position: absolute;
}

.productContainer .btn {
  position: absolute;
  z-index: 15;
}
```

The switch on button click is achieved via JS in the corresponding `script.js`:

```js
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('zoomBtn').addEventListener('click', () => {

    let showTeaser = true

    const show = () => {
      // show FSI Viewer instance and hide image
      document.getElementById('zoomEle').style.visibility = 'visible'
      document.getElementById('zoomImg').style.display = 'none'
      document.getElementById('zoomBtn').style.display = 'none'
      if (showTeaser) {
        showTeaser = false

        setTimeout(() => {
          instance.spinToTarget(12, 1, 80)
        }, 400)

        setTimeout(() => {
          instance.spinToTarget(0, 1, 80)
        }, 1000)
      }
    }

    const instance = $FSI.createNode("fsi-viewer", {
      dir: 'images/samples/Shoe/View2',
      debug: false,
      plugins: 'fullScreen',
      skin: 'example',
      width: '640',
      height: '427',
      // listen for finished loading FSI Viewer and becomes interactive
      onReady: show
    })
    document.getElementById('zoomEle').appendChild(instance)
  })

})
```

A click on the `zoomBtn` element will initialise a new FSI Viewer element in the `zoomEle` element.

The viewer itself is created with `$FSI.createNode("fsi-viewer",{parameters})`.

We create `show` that is called when the `onReady` callback is executed (see [documentation](https://docs.neptunelabs.com/docs/fsi-viewer/js-api/callbacks#onready)) we ensure a smooth transition:
Only when the viewer is ready will the viewer element will be set to visible, while the image and button are set to `display:none`.

If `showTeaser` is true, the method `setZoom` will be executed: `instance.setZoom(teaserZoomPercent, true, true)` (see [documentation](https://docs.neptunelabs.com/docs/fsi-viewer/js-api/public-methods#setzoom)).

For initialization, we use `$FSI.createNode` which creates the <fsi-viewer> custom tag which is appended to the `zoomEle` element.
