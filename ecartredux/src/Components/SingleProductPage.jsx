import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Cart from './Cart';

function SingleProductPage() {
  const {id}=useParams();
  const [data,setData]=useState();
  const fetchD=async()=>
  {
      let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
      let data=await res.json();
      setData(data.data)
      console.log(data.data)
  }
    useEffect(()=>{
      fetchD();
    },[])
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
                <div>
                    <img src={data?.image} alt={data?.name} />
                </div>
                <div>
                <p>Brand : {data?.brand}</p>  
                 <p>Title : {data?.title}</p>  
                 <p>Category : {data?.category}</p>  
                 <p>Price : {data?.price}</p>
                 <Link to={'/cart'}>  
                 <button style={{backgroundColor:"crimson"}}>Add To cart</button>
                 </Link>
                </div> 
    </div>
  )
}

export default SingleProductPage