import { PropTypes } from "prop-types";

function Video({isrc, title, views, time, channel="Unknown"}){
    return(
        <>
        <div className="container">
            <img className="image" src={isrc} />
            <div className="tname">{title}</div>
            <div className="cname">{channel}</div>
            <div className="misc">
                {views} views <span>.</span> {time}
            </div>
        </div>
        </>
    )
}

Video.propTypes ={
    isrc:PropTypes.string,
    title:PropTypes.string,
    views:PropTypes.bigint,
    time:PropTypes.number,
    channel:PropTypes.string
}

export default Video;