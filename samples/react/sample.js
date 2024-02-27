const Sample = () => {
  return (
    <div className='fsi-viewer-section'>
        <FSIComponent tagName="fsi-viewer" id={"Viewer_2D"} width={"100%"} height={"500px"} dir={"/images/samples/cruiser"}
                      plugins={"FullScreen,Resize"}/>
    </div>
  );
};
