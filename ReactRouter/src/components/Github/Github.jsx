import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github(){
    const data  = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https:/api.github.com/users/Apoorva65')
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         setData(res.followers)
    //     })
    // },[])
    return (
        <>
        <h1 className="text-center text-2xl bg-gray-600 text-white p-5">Github followers: {data.followers}</h1> 
        </>
    )
}

export default Github;

export const githubLoader = async() =>{
    const res = await fetch('https:/api.github.com/users/Apoorva65')
    return res.json();
}