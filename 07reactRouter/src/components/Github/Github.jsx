import React, { useEffect, useState } from "react";
export default function Github(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Muhammad-Qasim-Malik')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
    return(
        <div className="bg-gray-600 text-center m-4 text-white p-4 text-2xl">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" className="rounded"/>
        </div>
    )
}