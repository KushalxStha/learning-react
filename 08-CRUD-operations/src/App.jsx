import { useState } from "react"
import Data from "./components/Data"
import AddVideo from "./components/AddVideo"
import VideoList from "./components/VideoList";

function App() {
  const [vdo,setVdo]=useState(Data);
  const [editableVideo,setEditableVideo]=useState(null);

  function addNewFunc(newVid){
    setVdo([...vdo,{...newVid,id:vdo.length+5}]);
  }

  // Deleting Video
  function deleteVideo(id){
    setVdo(vdo.filter((vids)=>vids.id!==id));
  }

  // Editing Video
  function editVideo(id){
    setEditableVideo(vdo.filter((vids)=>vids.id===id));
  }

  // function updateVideos(videos){
  //   const index=vdo.find((vids)=>vids.id === videos.id);
  //   const newVdo=[...vdo];
  //   newVdo.splice(index, 1, videos);
  //   setVdo(newVdo);
  // }

  return (
    <>
    <div className="App">
      <h1>Videos</h1>
      <AddVideo 
        addNewProp={addNewFunc} 
        editableVideo={editableVideo}
        // updateVideos={updateVideos}
      />
      
      <VideoList 
        vdo={vdo} 
        deleteVideo={deleteVideo} 
        editVideo={editVideo}/>
    </div>
    </>
  )
}

export default App;