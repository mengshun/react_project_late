import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numSelector, decreaseNum, increaseNum } from './store/reducer'

function App() {

    const count = useSelector(numSelector)
    const dispatch = useDispatch()

    return (
        <div>
            App {count}
            <br />
            <button onClick={() => dispatch(increaseNum(11))}>点击累加</button>
            <button onClick={() => dispatch(decreaseNum(1))}>点击累减</button>
        </div>

    )
}

export default App