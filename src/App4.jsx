import React, { createContext, useState } from 'react'

const NumContext = createContext()

function Child() {
    return (
        <NumContext.Consumer>
            {
                ({ num, setNum }) => {
                    return (
                        <>
                            <h2>子组件2 - {num}</h2>
                            <button onClick={() => setNum(num + 1)}>累加</button>
                        </>
                    )
                }
            }
        </NumContext.Consumer>
    )
}

function Father() {
    return <Child />
}

// 顶级组件
export default function App4() {
    const [num, setNum] = useState(1)
    return (
        <NumContext.Provider value={{ num, setNum }}>
            <Father></Father>
        </NumContext.Provider>

    )
}
