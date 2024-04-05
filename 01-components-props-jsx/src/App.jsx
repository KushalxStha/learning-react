import Video from './components/Video'

export default function App() {
  let thumbnail="https://source.unsplash.com/random/250x180?sig="
  
  let obj1={
    isrc:`${thumbnail}3`,
    title:'Daily Practices for Inner Peace',
    // channel:'SerenitySphere',
    views:'1M',
    time:'2 years ago'
  };

  let obj2={
    isrc:`${thumbnail}4`,
    title:'The Future of Virtual Reality',
    channel:'FutureTechInsights',
    views:'800K',
    time:'6 months ago'
  };

  return (
    <>
      <div className="App">
        <h1>Videos</h1>
        <div className="allVideos">
          <Video
            isrc={`${thumbnail}1`}
            title="Journey Through Ancient Ruins"
            channel="AdventureSeekersTV"
            views="100K"
            time="1 year ago"
          />
          <Video
            isrc={`${thumbnail}2`}
            title="East Meets West Recipes"
            channel="CulinaryCrossroads"
            views="250K"
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