import React, { useState } from 'react'

const CommonCounter = (Wrapped,startWith) => {
    return function New(props) {
        const [count, setCount] = useState(startWith ?? 0)
        const handleCount = () => {
            setCount(count + 1)
        }
        return <Wrapped count={count} handleCount={handleCount} {...props} />
    }
}

export default CommonCounter