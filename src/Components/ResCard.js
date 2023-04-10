import React from 'react'

const ResCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {
  return (
    <div className='rescard-main'>
      <div>
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt='error'/>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{avgRating}</h3>
      </div>
    </div>
  )
}

export default ResCard
