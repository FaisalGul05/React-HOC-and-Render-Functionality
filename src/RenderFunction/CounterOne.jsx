import React from 'react'

const CounterOne = ({count,event}) => {
  return (
    <>
    <h1>{count}</h1>
    <button onClick={event}>INC</button>
    </>
  )
}

export default CounterOne