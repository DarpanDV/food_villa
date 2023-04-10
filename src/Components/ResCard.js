import React from 'react'
import { IMG_CDN_URL } from '../Config'

const ResCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {
  return (
    <div className='rescard-main'>
      <div>
      <img src={IMG_CDN_URL+cloudinaryImageId} alt='error'/>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{avgRating}</h3>
      </div>
    </div>
  )
}

export default ResCard
