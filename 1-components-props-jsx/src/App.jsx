import Video from './components/Video'

export default function App() {
  let thumbnail="https://source.unsplash.com/random/250x180?sig="
  
  let obj1={
    isrc:`${thumbnail}3`,
    title:'Node.js Full Course',
    // channel:'Kushal Code',
    views:'200K',
    time:'6 months ago'
  };

  let obj2={
    isrc:`${thumbnail}4`,
    title:'MongoDB Full Course',
    channel:'Kushal Code',
    views:'150K',
    time:'3 months ago'
  };

  return (
    <>
      <div className="App">
        <h1>Videos</h1>
        <div className="allVideos">
          <Video
            isrc={`${thumbnail}1`}
            title="React.js Full Course"
            channel="Kushal Code"
            views="100K"
            time="1 year ago"
          />
          <Video
            isrc={`${thumbnail}2`}
            title="Redux Full Course"
            channel="Kushal Code"
            views="50K"
            time="8 months ago"
          />
          <Video {...obj1}/>
          <Video {...obj2}/>
        </div>
      </div>
    </>
  )
}

// Spread Operator:
// Allows to expand or spread Arrays & Objects into multiple elements.