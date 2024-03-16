import Video from "./Video";
import {PropTypes} from "prop-types";

export default function VideoList({vdo, deleteVideo}){
    return(
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
            deleteVideo={deleteVideo}
          />
        ))}
    </div>
    )
}

VideoList.propTypes={
    vdo:PropTypes.array,
    deleteVideo:PropTypes.func
}