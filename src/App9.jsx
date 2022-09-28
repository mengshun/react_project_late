import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function App9() {
    const native = useNavigate()
    const location = useLocation()
    console.log("location is", location.pathname) // "/detail"
    return (
        <div>
            <ul>
                <li><Link to="/home?id=0990">首页</Link></li>
                <li><Link to="/list/123">列表页</Link></li>
                <li><Link to="/detail">详情页</Link></li>
            </ul>
            <button onClick={() => native("/detail", { state: { username: "李四" } })}>跳转详情页</button>
            <hr />
            <Outlet></Outlet>
        </div>
    )
}
