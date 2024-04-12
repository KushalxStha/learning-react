import { useState } from "react";
import Data from "./components/Data";

function App() {
  const [adata, setAdata]=useState(Data);
  const [videos, setVideos]=useState();

  function handleChange(e){
    setVideos({
      ...videos,
      id:adata.length+1,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(videos);
    
    videos===undefined?null:
    setAdata((current)=>[...current,videos]);
    // Pushing new data to existing Data
  }

  function handlePrint(e){
    e.preventDefault();
    console.log(adata);
  }

  return (
    <>
    <div className="App">
      <h2>Add Video Details</h2>
      <input type="text" name="title" onChange={handleChange} placeholder="Video Title"/>
      <input type="text" name="views" onChange={handleChange} placeholder="No. of Views"/>
      <input type="text" name="time" onChange={handleChange} placeholder="Uploaded Duration"/>
      <input type="text" name="channel" onChange={handleChange} placeholder="Channel Name"/>
      <div><input type="checkbox" name="verified" onChange={handleChange}/> Channel Verified </div>
      
      <div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="submit" onClick={handlePrint}>Print Console</button>
      </div>
    </div>
    </>
  )
}

export default App
