import React, { createContext, useContext, useState } from 'react'

const NumContext = createContext()

function Child() {
    const { num, setNum } = useContext(NumContext)
    return (
        <>
            <h2>子组件23 - {num}</h2>
            <button onClick={() => setNum(num + 1)}>累加</button>
        </>
    )
}

function Father() {
    return <Child />
}

// 顶级组件
export default function App() {
    const [num, setNum] = useState(1)
    return (
        <NumContext.Provider value={{ num, setNum }}>
            <Father></Father>
        </NumContext.Provider>

    )
}
