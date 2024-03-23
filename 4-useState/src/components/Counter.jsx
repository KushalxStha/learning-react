import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0);
    return(
        <>
        <div className="flex flex-col items-center">
            <h1 className="text-xl m-2">Counter</h1>
            <h1 className="text-xl">{count}</h1>
            <div>
                <button 
                className="m-2 outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500 hover:bg-red-700" 
                onClick={()=>count>0?setCount(count-1):null} 
                >
                Decrease
                </button>

                <button 
                className="m-2 outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500 hover:bg-green-700" 
                onClick={()=>count<20?setCount(count+1):null} 
                >
                Increase
                </button>
            </div>
        </div>
        </>
    )
}