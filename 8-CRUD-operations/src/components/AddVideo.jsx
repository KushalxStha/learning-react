import { useEffect, useState } from "react";
import {PropTypes} from "prop-types";

export default function AddVideo({addNewProp, editableVideo, updateVideos}) {
  const initialValue={
    title:"",
    views:"",
    time:"",
    channel:""
  };

  const [videos, setVideos]=useState(initialValue);
  const [isChecked, setIsChecked]=useState(false);

  function handleChange(e){
    setVideos({
      ...videos,
      [e.target.name]: e.target.value,
    });
    setIsChecked(e.target.checked);
  }

  function handleSubmit(e){
    e.preventDefault();

    // Checking if any required field is empty
    if (!videos.title || !videos.time || !videos.channel) {
      alert("Please fill in at least Title, Duration and Channel name.");
      return;
    }
    console.log(videos);

    if(editableVideo){
      updateVideos(videos);
    }
      
    addNewProp(videos)
      
    setVideos(initialValue);
    setIsChecked(false);
  }

  // useEffect(()=>{
  //   console.log("Component has been mounted.")
  //   if(editableVideo){
  //     setVideos(editableVideo);
  //   }
  // },[editableVideo]);

  return (
    <>
    <div>
        <form className="add">
          <h3>Add Video Details</h3>
          {/* value & checked --> Is used to convert from Uncontrolled to Controlled */}
          <input type="text" name="title" onChange={handleChange} placeholder="Video Title" value={videos.title}/>
          <input type="text" name="views" onChange={handleChange} placeholder="No. of Views" value={videos.views}/>
          <input type="text" name="time" onChange={handleChange} placeholder="Uploaded Duration" value={videos.time}/>
          <input type="text" name="channel" onChange={handleChange} placeholder="Channel Name" value={videos.channel}/>
          <div>
          <input type="checkbox" name="verified" onChange={handleChange} checked={isChecked}/> Channel Verified 
          </div>

          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    </>
  )
}

AddVideo.propTypes={
    addNewProp: PropTypes.func,
    editableVideo:PropTypes.array,
    updateVideos:PropTypes.func
}
