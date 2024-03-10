import Video from "./components/Video"
import Data from "./components/Data"

function App() {
  return (
    <>
    <div className="App">
      <h1>Videos</h1>
      <div className="allVideos">
        {Data.map((element)=>(
          // Mapping
          <Video
            key={element.id}
            imageId={element.id}
            title={element.title}
            channel={element.channel}
            verified={element.verified}
            views={element.views}
            time={element.time}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
