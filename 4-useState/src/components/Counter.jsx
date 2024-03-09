import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0);
    return(
        <>
        <div className="container">
            <h1>Counter</h1>
            <h1>{count}</h1>
            <div>
                <button className="dec" onClick={()=>count>0?setCount(count-1):null} >Decrease</button>
                <button className="inc" onClick={()=>count<20?setCount(count+1):null} >Increase</button>
            </div>
        </div>
        </>
    )
}