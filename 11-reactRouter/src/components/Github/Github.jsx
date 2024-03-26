// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {
    const data=useLoaderData()
    // const [data, setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/github')
    //     .then(res=>res.json())
    //     .then(res=>setData(res))
    // },[])

    return (
    <div className="bg-gray-600 text-white text-center text-3xl p-4">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="github logo" width={300}/>
    </div>
    )
}


// ---- Written in separate file ----
// export const githubInfoLoader = async ()=> {
//     const response= await fetch('https://api.github.com/users/github')
//     return response.json();
// }