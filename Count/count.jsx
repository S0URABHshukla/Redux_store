import { useState } from "react"

const Todo=()=>
{
    const[count,setCount]=useState(0);
    const[disable,setDisable]=useState(false)
    const handleMinusButtonDisable=()=>
    {
        setCount(count-1);
        setDisable(false);
        if(count<=1)
        {
            setDisable(true);
        }        
    }
    const handlePlusButton=()=>
    {
        setCount(count+1);
        setDisable(false);
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handlePlusButton}>+</button>
            <button onClick={handleMinusButtonDisable} disabled={disable}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default Todo;