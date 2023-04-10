import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import { reslist } from '../Config'


const Body = () => {

  const [txt, setTxt] = useState("");

  const [item, setItem] = useState(reslist);

  const searchItems = (e) => {
    setTxt(e.target.value);
  }
  const filterItems = (txt) => {
    let f = 0;
    item.filter((eve) => {
      if (eve.data.name.includes(txt)) {
        f = 1;
        setItem([eve]);
      }
    })
    if (f == 0)
      setItem([]);
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
  }
  return (
    <>
      <div className='search-container'>
        <input type='text' placeholder='ENTER THE TEXT' value={txt} onChange={searchItems} />
        <button onClick={() => filterItems(txt)}>Search</button>
      </div>
      <div>
        {
          item.map((e) => {
            return <ResCard {...e.data} key={e.data.id} />
          })
        }
      </div>
    </>
  )
}

export default Body
