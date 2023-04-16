import React, { useState } from 'react'

const Section = ({ title, Description,isVisible,SetisVisible}) => {
  
  return (
    <div style={{ backgroundColor: 'black', color: 'white', border: '2px solid black', fontWeight: 'normal', fontSize: '0.5' }}>
      <h1>{title}</h1>
      {isVisible&&<h1>{Description}</h1>}
     
      {(isVisible===false)?<button onClick={()=>{
        SetisVisible(true)
      }}>Show</button>
       :<button onClick={()=>{
        SetisVisible(false)
      }}>Hide</button>}
    </div>
  )
}



const Instamart = () => {
  const[sectionConfig,setSectionConfig]=useState({
    showAbout:false,
    showDetails:false,
    showTeam:false,
  })
  return (
    <>
      <h1>Instamart</h1>
      <div>
        <Section title={"About Instamart"} Description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "} isVisible={sectionConfig.showAbout} SetisVisible={()=>
          setSectionConfig({
            showAbout:true,
            showDetails:false,
            showTeam:false,
          })
        }/>
        <Section title={"Team Instamart"} Description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "} isVisible={sectionConfig.showTeam} SetisVisible={()=>
           setSectionConfig({
            showAbout:false,
            showDetails:false,
            showTeam:true,
          })
        }/>
        <Section title={"Details of Instamart"} Description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "} isVisible={sectionConfig.showDetails} SetisVisible={()=>
          setSectionConfig({
              showAbout:false,
            showDetails:true,
            showTeam:false,
          })
        }/>
      </div>
    </>
  )
}

export default Instamart
