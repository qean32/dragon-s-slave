import React from "react"

export const Root: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.StrictMode>
            {children}
        </React.StrictMode>
    )
}
