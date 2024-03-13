import { useState } from "react";
import {PropTypes} from "prop-types";

export default function AddVideo({addNewProp}) {
  const initialValue=undefined;
  const [videos, setVideos]=useState(initialValue);

  function handleChange(e){
    setVideos({
      ...videos,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(videos);
    
    videos===undefined?null:
    addNewProp(videos);
    setVideos(initialValue);
  }

  return (
    <>
    <div className="add">
        <h3>Add Video Details</h3>
        
        <input type="text" name="title" onChange={handleChange} placeholder="Video Title"/>
        <input type="text" name="views" onChange={handleChange} placeholder="No. of Views"/>
        <input type="text" name="time" onChange={handleChange} placeholder="Uploaded Duration"/>
        <input type="text" name="channel" onChange={handleChange} placeholder="Channel Name"/>
        <div><input type="checkbox" name="verified" onChange={handleChange}/> Channel Verified </div>

        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

AddVideo.propTypes={
    addNewProp: PropTypes.func
}
