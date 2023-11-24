document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('zoomBtn').addEventListener('click', () => {

    let showTeaser = true

    let instance = new $FSI.Viewer('zoomEle', {
      dir: 'images/samples/Shoe/View2',
      debug: false,
      plugins: 'fullScreen',
      skin: 'example',
      width: '640',
      height: '427',
      // listen for finished loading FSI Viewer and becomes interactive
      onReady: () => {
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
      },
    })

    instance.start()

  })

})
