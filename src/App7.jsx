import React, { useState, memo, useCallback, useMemo } from 'react'

const Child = memo((props) => {
    console.log(123)
    return (
        <div>
            子组件
            <button onClick={() => props.doSth()}>累加</button>
        </div>
    )
})

export default function App() {
    const [num, setNum] = useState(1)
    const doSth = useMemo(() => {
        return () => setNum((num) => num + 1)
    }, [])
    return (
        <div>
            <h3>数字为 {num}</h3>
            <Child doSth={doSth}></Child>

        </div>
    )
}
