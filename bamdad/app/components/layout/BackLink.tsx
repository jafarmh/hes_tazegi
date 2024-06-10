'use client'

import Back from '@/asset/img/back.svg'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

interface propsItem{
    urlBack:string
}

export default function BackLink(props:propsItem) {
    const router = useRouter()
    const {urlBack}=props

    return (
        <>
            {urlBack !== '' ? <Link href={urlBack}><img src={Back.src} alt='back' /></Link> :
                <button className='bg-transparent cursor-pointer' onClick={() => router.back()}><img src={Back.src} alt='back' /></button>}
        </>
    )
}
