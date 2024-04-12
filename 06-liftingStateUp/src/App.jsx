import Data from "./components/Data"
import Video from "./components/Video"
import AddVideo from "./components/AddVideo"
import { useState } from "react"

function App() {
  const [vdo,setVdo]=useState(Data);

  function addNewFunc(newVid){
    setVdo([...vdo,{...newVid,id:vdo.length+1}]);
  }
  return (
    <>
    <div className="App">
      <h1>Videos</h1>
      <AddVideo addNewProp={addNewFunc}/>
      <div className="allVideos">
        {vdo.map((elem)=>(
          <Video
            key={elem.id}
            imageId={elem.id}
            title={elem.title}
            channel={elem.channel}
            verified={elem.verified}
            views={elem.views}
            time={elem.time}
          />
      ))}
      </div>
    </div>
    </>
  )
}

export default App;


