import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import { reslist } from '../Config'
import Shimmer from './Shimmer'
import useOnline from './Utils/useOnline'
import { filterItems } from './Utils/helper'
const Body = () => {

  const [txt, setTxt] = useState("");

  const [item, setItem] = useState([]);

  const [filtereditem, setFilteredItem] = useState([]);

  const searchItems = (e) => {
    setTxt(e.target.value);
  }
  
 const filterItems = (txt) => {
    let f = 0;
     console.log("clicked");
     item.filter((eve) => {
       if (eve?.data?.name?.toLowerCase()?.includes(txt.toLowerCase())) {
         f = 1;
         setFilteredItem([eve]);
       }
     })
     if (f === 0)
       setFilteredItem([]);
   
   }
  useEffect(()=>{
    getResCard();
  },[])

  async function getResCard()
  {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json(); 
    console.log(json);
    setItem(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredItem(json?.data?.cards[2]?.data?.data?.cards)
  }
   const offline=useOnline();
   if(!offline)
   return <h1>OOPS!! CHECK YOUR INTERNET CONNECTION</h1>

  //early return or optional chaining otherwise smtime code will break length undefined krke
  if(!item)
  return null 
  return (item?.length===0)?<Shimmer />:(
    <>
      <div className='search-container'>
        <input type='text' placeholder='ENTER THE TEXT' value={txt} onChange={searchItems} />
        <button onClick={() => filterItems(txt)}>Search</button>
      </div>
      <div>
        {
          filtereditem.map((e) => {
            return <ResCard {...e.data} key={e.data.id} />
          })
        }
      </div>
    </>
  )
}

export default Body
