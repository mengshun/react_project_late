import React, { useRef, useState } from 'react'

export default function App() {

    const [value, setValue] = useState("asd")
    const element = useRef(null)
    return (
        <div>
            <h3>受控组件</h3>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => console.log(value)}>获取input的值</button>
            <h3>不受控组件</h3>
            <input type="text" ref={element} />
            <button onClick={() => console.log(element.current.value)}>获取input的值</button>
        </div>
    )

}
