import React from 'react'
import CommonCounter from '../HOC/CommonCounter'

const Counter2 = ({ count, handleCount }) => {

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleCount}>INC</button>
        </>
    )
}

export default CommonCounter(Counter2)