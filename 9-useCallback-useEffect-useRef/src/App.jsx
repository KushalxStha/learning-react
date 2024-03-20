import { useCallback, useState, useEffect, useRef } from "react"

export default function App(){
    const [length,setLength]=useState(8);
    const [numberAllowed,setNumberAllowed]=useState(false);
    const [charAllowed,setCharAllowed]=useState(false);
    const [password,setPassword]=useState("");

    const passwordRef=useRef(null);

    const passwordGenerator = useCallback(() => {
        // it is cached and does not get redefined on every render.
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*?{_+}[-]~"

        for(let i=1; i<= length; i++){
            let char=Math.floor(Math.random()*str.length+1);
            // char is getting index value not actual character.
            pass +=str.charAt(char);
            // charAt returns the character at the specified index.
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword])

    useEffect(()=>{
        passwordGenerator();
    },[length, numberAllowed, charAllowed, passwordGenerator])

    // useEffect(()=>{
    //     let pass=""
    //     ......
    //     setPassword(pass);
    // },[length, numberAllowed, charAllowed])

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,50);

      window.navigator.clipboard.writeText(password);
    },[password])

    return(
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
            <h1 className="text-white text-center my-3">Password Generator</h1>
            
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input 
                type="text" 
                value={password} 
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={passwordRef}
                />
                <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700">Copy</button>
            </div>
            
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input 
                    type="range" 
                    min={8} 
                    max={50} 
                    value={length} 
                    className="cursor-pointer"
                    onChange={(e)=>{setLength(e.target.value)}}
                    />
                    <label>Length: {length}</label>
                </div>
                
                <div className="flex items-center gap-x-1">
                    <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={()=>{
                        setNumberAllowed((prev)=> !prev)
                        // Reversing Previous value (switching bet. True/False)
                    }}
                    />
                    <label>Numbers</label>
                </div>
                
                <div className="flex items-center gap-x-1">
                    <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="charInput"
                    onChange={()=>{
                        setCharAllowed((prev)=> !prev)
                    }}
                    />
                    <label>Characters</label>
                </div>
            </div>

        </div>
    )
}