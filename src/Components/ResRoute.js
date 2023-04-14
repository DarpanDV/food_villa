import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const ResRoute = () => {
    const {id}=useParams();
    useEffect(()=>{
        getResInfoApi();
    },[])
    async function getResInfoApi()
    {
        const data=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229");
        const json=data.json();
        console.log(json);
    }
  return (
    <div>
      <h1>Res Dynamic{id}</h1>
    </div>
  )
}

export default ResRoute
