import React from "react"
import { Toaster } from 'react-hot-toast';

export const Root: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <React.StrictMode>
                {children}
                <Toaster />
            </React.StrictMode>
        </>
    )
}
