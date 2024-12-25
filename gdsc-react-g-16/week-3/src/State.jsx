// import React from "react";
import React, {useState} from "react";
function State(){
    const [count, setCount]=useState(0);
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count +1)}>Increament</button>
            <button onClick={()=>setCount(count -1)}>decreament</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default State;
