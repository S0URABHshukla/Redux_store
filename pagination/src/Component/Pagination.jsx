import { useState } from "react";
import { useEffect } from "react";

function Pagination({current, total, onChange}) {

  const [btns,setBtns] = useState([])  
  useEffect(() => {
    let arr = new Array(total).fill(1);    
    setBtns(
      arr.map((e,i) => (
        <button key={i+1} style={{borderColor: i+1 === current ? 'red' : ""}} onClick = {(e) => onChange(i+1)} >{i+1}</button>
        ))
        )        
      },[current])
      
  return (
    <div data-testid="page-container">
      {btns}
    </div>
  );
}
export default Pagination;