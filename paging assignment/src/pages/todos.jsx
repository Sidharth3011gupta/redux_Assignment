import React, { useEffect, useState } from "react";
import TodoCard from "../components/todoCard";


function TODOS(){

  const [data,setData]=useState(null);
  const getTodos= async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos");

    setData(await response.json());
  }

  useEffect(()=>
  {
    getTodos()
  },[])
  console.log(data)
  return(
    <div className="TODOS">
      {data ? (data.map((e)=><TodoCard id={e.id} title={e.title}></TodoCard>)):(<p>NO DATA</p>)}
    </div>
  )
} export default TODOS;