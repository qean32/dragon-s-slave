import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as page from '@/pages'
import { Sidebar } from "./component/widget/sidebar/sidebar"
import { ProtectedRouteAuth } from "./pages/protected-route"
import { MainLoader } from '@/component/widget'

export const Router = () => {
    return (
        <BrowserRouter>
            <MainLoader />
            <Sidebar />
            <Routes>
                <Route element={<page.TechWork />} path="/" />
                <Route element={<page.Auth />} path="/auth" />
                <Route element={<page.Test />} path="/test" />
                <Route element={<page.Catalog />} path="/catalog" />

                <Route element={<page.Character />} path="/character/:id" />
                <Route element={<page.Item />} path="/item/:id" />
                <Route element={<page.Map />} path="/map/:id" />

                <Route element={<ProtectedRouteAuth><page.CreateCharacter /></ProtectedRouteAuth>} path="/create-character" />
                <Route element={<ProtectedRouteAuth><page.CreateMap /></ProtectedRouteAuth>} path="/create-map" />
                <Route element={<ProtectedRouteAuth><page.CreateItem /></ProtectedRouteAuth>} path="/create-item" />

                <Route element={<page._404 />} path="*" />
            </Routes>
        </BrowserRouter>
    )
}
