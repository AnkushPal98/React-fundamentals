import React from 'react'
import { useState } from 'react'

function Child(props) {
    let childCounterValue = props.countValue;
    
  return (
    <button onClick={() => props.callbackFn(++childCounterValue)}>Increment Count</button>
  )
}

export default function Parent() {
    const [count, setCount] = useState(0);
    const callback = (countFromChild) => {
        console.log(countFromChild);
        setCount(countFromChild);
    }
  return (
    <>
    <p>{count}</p>
    <Child callbackFn={callback} countValue={count}/>
    </>
  )
}

