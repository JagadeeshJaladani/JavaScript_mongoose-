import React, { useState } from "react";

const PreviousCountUseRef = () => {
    count[count,setCount]= useState(0)
    return (
        <div>
            <h2>current Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>

        </div>
    )
}

export default PreviousCountUseRef;