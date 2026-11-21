import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as page from '@/pages'
import { Sidebar } from "./component/widget/sidebar/sidebar"

export const Router = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route element={<page.Auth />} path="/" />
            </Routes>
        </BrowserRouter>
    )
}
