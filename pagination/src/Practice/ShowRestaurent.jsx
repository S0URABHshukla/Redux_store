import React from 'react'

function ShowRestaurent({id, name,type, rating, votes,image}) {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div>
            <img src={image} alt={name} />
        </div>
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{type}</p>
            <p>{rating}</p>
            <p>{votes}</p>
        </div>
    </div>
  )
}

export default ShowRestaurent