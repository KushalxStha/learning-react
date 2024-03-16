import { useState } from "react"
import Data from "./components/Data"
import AddVideo from "./components/AddVideo"
import VideoList from "./components/VideoList";

function App() {
  const [vdo,setVdo]=useState(Data);

  function addNewFunc(newVid){
    setVdo([...vdo,{...newVid,id:vdo.length+5}]);
  }

  // Deleting Video
  function deleteVideo(id){
    setVdo(vdo.filter((vids)=>vids.id!==id));
  }

  return (
    <>
    <div className="App">
      <h1>Videos</h1>
      <AddVideo addNewProp={addNewFunc}/>
      <VideoList vdo={vdo} deleteVideo={deleteVideo}/>
    </div>
    </>
  )
}

export default App;