import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as page from '@/pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<page.Auth />} path="/" />
            </Routes>
        </BrowserRouter>
    )
}
