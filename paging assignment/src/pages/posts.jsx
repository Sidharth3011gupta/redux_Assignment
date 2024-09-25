import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";




function POSTS(){

  const [data,setData]=useState(null);
  const getPosts= async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");

    setData(await response.json());
  }

  useEffect(()=>
  {
    getPosts()
  },[])
  console.log(data)
  return(
    <div className="POSTS">
      {data ? (data.map((e)=><PostCard  title={e.title} body={e.body}></PostCard>)):(<p>NO DATA</p>)}
    </div>
  )
} export default POSTS;