import React, { useState } from 'react'

function Child(props) {
    return (
        <>
            <h2>子组件 - {props.num}</h2>
            <button onClick={() => props.setNum("123456")}>累加</button>
        </>
    )
}

function Father(props) {
    return <Child num={props.num} setNum={props.setNum} />
}

// 顶级组件
export default function App3() {
    const [num, setNum] = useState(1)
    return (
        <div>
            <Father num={num} setNum={setNum}></Father>
        </div>
    )
}
