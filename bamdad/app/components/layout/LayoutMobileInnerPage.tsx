'use client'

import FooterMobile from './FooterMobile'
import HeaderMobileBack from './HeaderMobileBack'
import HeaderMobileInner from './HeaderMobileInner'
import HeaderMobileInnerMor from './HeaderMobileInnerMor'
import LayoutMobileContainer from './LayoutMobileContainer'
import React from 'react'
import useRtlLtr from '@/app/hooks/RtlLtr'

interface LayoutProps {
    children: React.ReactNode,
    urlBack: string,
    type?: string,
    reportId?:string
}

export default function LayoutMobileInnerPage(props: LayoutProps) {
    const { children, urlBack, type = "setting",reportId="" } = props
    const dir=useRtlLtr();
    return (
        <>
            <LayoutMobileContainer>
                {
                    type === "setting" ? <HeaderMobileInner urlBack={urlBack} /> :
                        type === "backGeneral" ? <HeaderMobileBack urlBack={urlBack} /> :
                            <HeaderMobileInnerMor reportId={reportId} urlBack={urlBack} />
                }
                <main className='' dir={dir}>{children}</main>
                <FooterMobile />

            </LayoutMobileContainer>

        </>
    )
}
