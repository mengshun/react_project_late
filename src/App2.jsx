import React, { useEffect, useState } from 'react'

export default function App2() {

    const [num, setNum] = useState(1);
    const [num2, setNum2] = useState(1);

    // 模拟 beforeDestroy 处理垃圾回收或者脏数据
    useEffect(() => {
        console.log("挂载更新了")
        return () => {
            console.log("销毁了")
        }
    })

    return (
        <>
            <h2>数字1为: {num}</h2>
            <button onClick={() => setNum(num + 1)}>累加</button>
            <hr />
            <h2>数字2为: {num2}</h2>
            <button onClick={() => setNum2(num2 + 1)}>累加</button>
        </>
    )
}
