import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as page from '@/pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<page.Main />} path="/" />
            </Routes>
        </BrowserRouter>
    )
}
