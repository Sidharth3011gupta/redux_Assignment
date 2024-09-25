import React, { useEffect, useState } from "react";

import ProductCard from "./components/ProductCard";


function App(){

  const [data,setData]=useState(null);
  const getProducts= async()=>{
    const response=await fetch("https://fakestoreapi.com/products");

    setData(await response.json());
  }

  useEffect(()=>
  {
    getProducts()
  },[])
  console.log(data)
  return(
    <div className="App">
      {data ? (data.map((e)=><ProductCard image={e.image} title={e.title} description={e.description}></ProductCard>)):(<p>NO DATA</p>)}
    </div>
  )
} export default App;