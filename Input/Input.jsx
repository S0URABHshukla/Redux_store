// import { useState } from 'react';
// export const Input=()=>
// {
//     const [data,setData]=useState("type");
//     const [store,setStore]=useState([]);
//    const handlerChange=(event)=>
//    {
//     setData(event.target.value)
//    }
//    const handlerSubmit=(event)=>
//    {
//     event.preventDefault();
//     const newData=data;
//     setStore([...store,newData])
//     setData("")
//    }
//     return(
//         <div>
//             <input type="text" value={data} onChange={handlerChange}/>
//             <form  onSubmit={handlerSubmit}>
//             <button type='submit'>Add Todo</button>
//             </form>
//             <h1>{store}</h1>
//             <button onClick={()=>setStore("")}>Clear</button>
//         </div>
//     )
// }

import { useState } from "react";

const Input=()=>
{
    const [inputdata,setInputdata]=useState();
    const[text,setText]=useState();
    const dataHandler=()=>
    {
        setInputdata("");
        setText(inputdata);
        
    }
    return(
        <div>
            <input type="text" onChange={(e)=>setInputdata(e.target.value)}/>
            <button onClick={dataHandler}>Submit</button>
            <h1>{text}</h1>
        </div>
    )
}
export default Input;