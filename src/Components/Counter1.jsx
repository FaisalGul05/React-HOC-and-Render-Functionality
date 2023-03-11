import React, { useEffect } from 'react'
import CommonCounter from '../HOC/CommonCounter'

const Counter1 = ({ handleCount, count,name }) => {
    useEffect(() => {
        console.log("Counter 1 called")
    })

    return (
        <>
        <h1>Home {name}</h1>
            <h1>{count}</h1>
            <button onClick={handleCount}>INC</button>
        </>
    )
}

export default CommonCounter(Counter1,10)