import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './Loader';
import Pagination from './Pagination';
import ShowRestaurent from './ShowRestaurent';

function Restaurents() {
    const [data,SetData]=useState([]);
    const [page,setPage]=useState(1);
    const [totalpage,setTotalpage]=useState(0);
    const [loader,setLoader]=useState(true);
    const getRestaurentdata=async()=>
    {
        var res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`);
        var data=await res.json();
        setLoader(false);
        SetData(data.data);
        setTotalpage(data.totalPages);
        console.log(data.totalPages)
    }
    useEffect(()=>
    {
        getRestaurentdata();
    },[page])
  return (
    <>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px",margin:"auto"}}>
            {loader ? <Loader/> : data.map((e,i)=>
            {
                return <div style={{border:"1px solid black",padding:"50px"}} key={i}> <ShowRestaurent id={e.id} image={e.image} name={e.name} type={e.type} rating={e.rating} votes={e.number_of_votes}/> </div>
            })}
        </div>
        <Pagination totalPage ={totalpage} currentPage={page} onchange={(page)=>setPage(page)}/>
    </>
  )
}

export default Restaurents