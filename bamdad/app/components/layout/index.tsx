'use client'

import Footer from './Footer'
import HeaderWhite from './HeaderWhite'
import React from 'react'
import useRtlLtr from '@/app/hooks/RtlLtr'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const { children } = props
    const dir=useRtlLtr();
    return (
        <>
            <HeaderWhite />
            <main dir={dir}>{children}</main>
            <Footer/>
        </>
    )
}
