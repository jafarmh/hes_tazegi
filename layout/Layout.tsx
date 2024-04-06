import { ChildrenProps } from '@/interface/Element'
import { Header } from './header/Index'
import React from 'react'

export const Layout = ({ children }: ChildrenProps) => {
    return (
        <main className='w-full md:w-[80%] md:mx-auto' dir='ltr'>
            <Header />
            <div className='mt-[57px]'>

                {children}
            </div>
        </main>
    )
}
