import {PropTypes} from "prop-types";

export default function Video({imageId,title,channel="Unknown",verified,views,time}){
    return (
        <>
        <div className="container">
            <img src={`https://source.unsplash.com/random/250x180?sig=${imageId}`} className="image" />
            <div className="tname">{title}</div>
            <div className="cname">
                {channel}
                {verified?"☑️":null}
            </div>
            <div className="misc">
                {views} views <span>.</span> {time}
            </div>
        </div>
        </>
    )
}

Video.propTypes ={
    imageId:PropTypes.number,
    title:PropTypes.string,
    channel:PropTypes.string,
    views:PropTypes.string,
    time:PropTypes.string,
    verified:PropTypes.bool
}