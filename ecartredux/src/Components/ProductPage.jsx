import React from 'react'
import style from '../Style/Single.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader'
import styleproduct from '../Style/Productpage.module.css'

function ProductPage() {
    const [order,setOrder]=useState("asc");
    const [filter,setFilter]=useState("all");
    const [page,setPage]=useState(1);
    const [totalpage,setTotalpage]=useState(1);
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true);
    const fetchData=async ()=>
    {
        let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&sort=price&order=${order}&filter=${filter}`);
        let data=await res.json();
        setLoader(false);
        setData(data.data);
        setTotalpage(data.totalPages);
    }
    useEffect(()=>
    {
        fetchData();
    },[page,filter,order])
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",padding:"0 50px"}}>
        <select id={styleproduct.order} onChange={(e)=>setOrder(e.target.value)}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
        </select>
        <select  id={styleproduct.filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="homedecor">Home Decor</option>
        </select>

    </div>
    
    <div id={style.grid} >
        {loader ? <Loader/> : 
        data?.map((e,i)=>
        {
            return <div key={i}>
                <Link to={`/product/${e.id}`}> 
                <div>
                    <img src={e.image} alt={e.name} />
                </div>
                <div>
                <p>Brand : {e.brand}</p>  
                 <p>Title : {e.title}</p>  
                 <p>Category : {e.category}</p>  
                 <p>Price : {e.price}</p>  
                </div>  
                </Link>                
                 </div>
        })}        
    </div>
    <div style={{textAlign:"center"}}>
        <button disabled={page===1} style={{background:"#303030",color:"white"}} onClick={((e) => setPage(page-1) )}>prev</button>
        <span style={{color:"red",fontSize:"18px"}}>{ page }</span>
        <button disabled={page===totalpage} style={{background:"#303030",color:"white"}} onClick={((e) => setPage(page+1) )}>Next</button>
    </div>
    </>
  )
}

export default ProductPage