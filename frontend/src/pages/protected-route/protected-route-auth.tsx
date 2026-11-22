import React from 'react'
import { NeedAuth } from '@/pages'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteAuth: React.FC<Props> = ({ children }: Props) => {
    if (true) {
        return <NeedAuth />
    }

    return (
        <>
            {children}
        </>
    )
}
