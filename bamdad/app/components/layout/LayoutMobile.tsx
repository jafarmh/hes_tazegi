'use client'

import Footer from './Footer'
import FooterMobile from './FooterMobile'
import HeaderMobile from './HeaderMobile'
import HeaderWhite from './HeaderWhite'
import LayoutMobileContainer from './LayoutMobileContainer'
import React from 'react'
import useRtlLtr from '@/app/hooks/RtlLtr'

interface LayoutProps {
    children: React.ReactNode,
    HaveAction?:boolean
}

export default function LayoutMobile(props: LayoutProps) {
    const { children,HaveAction=false } = props;
    const dir=useRtlLtr();
    return (
        <>
              <LayoutMobileContainer>
                <HeaderMobile HaveAction={HaveAction}/>
                <main  className='' dir={dir}>{children}</main>
                <FooterMobile />
            </LayoutMobileContainer>
        </>
    )
}
