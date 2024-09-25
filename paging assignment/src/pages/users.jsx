import React, { useEffect, useState } from "react";
import UserCard from "../components/usercard";



function USERS(){

  const [data,setData]=useState(null);
  const getUsers= async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");

    setData(await response.json());
  }

  useEffect(()=>
  {
    getUsers()
  },[])
  console.log("Here",data)
  return(
    <div className="USERS">
    
      {data ? (data.map((e)=><UserCard name={e.name} username={e.username}></UserCard>)):(<p>NO DATA</p>)}
    </div>
  )
} export default USERS;