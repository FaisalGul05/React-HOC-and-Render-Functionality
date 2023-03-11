import React, { useState } from 'react'

const CommonCounter = ({ render,startsWith }) => {
    const [count, setCount] = useState(startsWith ?? 0)
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            {render(count, handleCount)}
        </>
    )
}

export default CommonCounter