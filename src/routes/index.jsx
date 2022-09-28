import App from "../App9"
import Home from "../pages/Home"
import ListDemo from "../pages/List"
import Detail from "../pages/Detail"
import Error from "../pages/Error"
import { BrowserRouter, Route, Routes } from "react-router-dom"

/*
react-router-dom中有2种模式:
    BrowerRouter(History模式)   需要服务端配合 配置nginx
    HashRouter(Hash模式)  带 # 号, 自己直接发包即可
*/

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/detail" element={<Detail />}></Route>
                <Route path="/list/:id" element={<ListDemo />}></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter
