import React from 'react';

function Pagination({totalPage,currentPage,onchange}) {
   const arr=new Array(totalPage).fill("").map((_,i)=>i+1);
   
  return (
    <div style={{textAlign:"center"}}>
        {arr.map((e,i)=>
        {
            return  <button key={i} onClick={()=>onchange(e)} style={{border:e===currentPage ? "1px solid red" : "1px solid purple"}} disabled={e===currentPage ? true : false}>{e}</button>
        })}
    </div>
  )
}

export default Pagination;