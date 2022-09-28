import { useState } from "react"

const App1 = () => {
    const [num, setNum] = useState(1)
    return (
        <>
            <h2>{num}</h2>
            <button onClick={() => setNum(num + 1)}>修改 msg</button>
        </>
    )
}

export default App1