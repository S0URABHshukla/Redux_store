import React from 'react'

function HeroCard({arr,max}) {
  return (
    <div>
      {arr.filter((e)=>e.level>=max).map((e,i)=>
      {
        return <div key={i} style={{border:"1px solid purple",padding:"20px"}}>
          <p>Name: <h4 style={{color:"red"}}>{e.name}</h4></p>
          <p>Height: <h4 style={{color:"red"}}>{e.height}</h4></p>
          <p>Weight: <h4 style={{color:"red"}}>{e.height}</h4></p>
          <p>Power Level: <h4 style={{color:"red"}}>{e.level}</h4></p>
        </div>
      })}
        
    </div>
  )
}

export default HeroCard