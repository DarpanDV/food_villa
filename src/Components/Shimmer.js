import React from 'react'

const Shimmer = () => {
  return (
    <div className='Shimmer-main'>
      {Array(10).fill("").map((e,ind)=>{
        return <h1 key={ind} style={{
          backgroundColor:'grey',
          width:'100px',
          height:'100px'
        }}>{e}</h1>
      })}
      
    </div>
  )
}

export default Shimmer
