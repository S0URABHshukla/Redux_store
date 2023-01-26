import React from 'react'
import { useState } from 'react'
import HeroCard from './HeroCard'

function HeroForm() {
    const [inputdata,setInputdata]=useState(
        {
            name:"",
            height:"",
            weight:"",
            level:"",
        }
    )
    const [data,setData]=useState([])
    const handleFormSubmit=(e)=>
    {
        e.preventDefault();   
        setData([...data,inputdata]);     
    }
    // const mostPowerfulHero=()=>
    // {
    //     const updateArray=data.map((e,i)=>
    //     {
            
    //     }
    //     )
    // }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Enter SuperHero Name' name='name' onChange={(e)=>setInputdata({...inputdata,[e.target.name]:e.target.value})}/> <br />
            <input type="number" name='height' placeholder='Enter Height in cms' onChange={(e)=>setInputdata({...inputdata,[e.target.name]:e.target.value})}/> <br />
            <input type="number" name='weight' placeholder='Enter Weight in kgs' onChange={(e)=>setInputdata({...inputdata,[e.target.name]:e.target.value})}/> <br />
            <input type="number" name='level' placeholder='Power Level' onChange={(e)=>setInputdata({...inputdata,[e.target.name]:e.target.value})}/> <br />
            <input type="submit" placeholder='Submit' disabled={inputdata.name && inputdata.height && inputdata.weight && inputdata.level ? false : true}/> <br />
            <input type="button" value="Most Powerful SuperHero" hidden={data.length<= 1 ? true : false} onClick/>
            <input type="button" value="Show All" hidden={data.length<= 1 ? true : false} onClick/>
        </form>
        <HeroCard arr={data}/>
    </div>
  )
}

export default HeroForm