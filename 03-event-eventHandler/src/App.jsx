import Play from "./components/Play"

export default function App() {

  return (
    // Here, onClick on Outer div, will cause Event 
    // Bubbling even if children elements are clicked.
    <div className="App" onClick={()=>console.log("App")}>
      <h2>Events & Events Handler</h2>
    
      <Play
      onPlay2={()=>console.log("Video is Playing..")}
      onPause2={()=>console.log("Video is Paused..")}
      >
        Play/Pause {/* Children Prop */}
      </Play>
    </div>
  )
}

/*
[onPlay2 & onPause2] is Custom Event
It is passed as Functional Prop.
Starts with 'on' --> signifies a trigger.
Usefull for executing tasks within the same component.
*/

/*
During the bubbling phase, the event ascends the  
DOM tree from the triggering element to its parent 
and beyond until it reaches the document's top.
*/