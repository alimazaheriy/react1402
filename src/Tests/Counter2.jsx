import {useState} from "react";

export const Counter2=()=>{

    const [counter,setCounter]=useState(0)

    const css=()=>{
        if(counter>0)
            return "badge bg-success"
        if(counter===0)
            return "badge bg-warning"

        return "badge bg-danger"
    }

    return(
        <>
        <h1>Product List</h1>
            <strong>Count</strong><span className={css()}>{counter}</span>
            <div>
                <button className="btn btn-success" onClick={()=>setCounter(counter+1)}>Add</button>

                <button className="btn btn-danger" onClick={()=>setCounter(counter-1)}>Sub</button>
            </div>
        </>
    )
}