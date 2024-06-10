'use client'

import React, { useState } from 'react'

import AddMenuBusinessDrawer from '../elements/drawer/business/AddMenuBusinessDrawer'
import Footer from './Footer'
import FooterMobile from './FooterMobile'
import HeaderMobile from './HeaderMobile'
import HeaderWhite from './HeaderWhite'
import LayoutMobileContainer from './LayoutMobileContainer'
import Setting from '@/asset/img/setting-2.svg'
import SettingBusinessDrawer from '../elements/drawer/business/SettingBusinessDrawer'
import shopAdd from '@/asset/img/shopAdd.png'
import useRtlLtr from '@/app/hooks/RtlLtr'

interface LayoutProps {
    children: React.ReactNode,
    HaveAction?: boolean
}



export default function LayoutMobileProfile(props: LayoutProps) {
    const { children, HaveAction = false } = props
    const [openSetting, setOpenSetting] = useState(false);
    const [openAddItem, setOpenAddItem] = useState(false);
    const dir=useRtlLtr();

    return (
        <>
            <LayoutMobileContainer>
                <header dir={dir}>
                    <div className="flex flex-col ">
                        <div className="  w-full">

                            <div className=" flex h-14  items-center flex-row w-full">
                                <div onClick={() => setOpenSetting(true)} className="flex-grow  "><img src={Setting.src} alt="more" /></div>
                                <div className="flex-none   flex gap-x-3  justify-end cursor-pointer">

                                    <div onClick={HaveAction ? () => setOpenAddItem(true) : () => { }} className="flex-none cursor-pointer  flex gap-x-3  justify-end">
                                        <img src={shopAdd.src} alt='app-login' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className='' dir={dir}>{children}</main>
                <FooterMobile />
            </LayoutMobileContainer>
            {openSetting && <SettingBusinessDrawer changeOpen={(value: boolean) => setOpenSetting(value)} isOpen={openSetting} />}
            {openAddItem && <AddMenuBusinessDrawer changeOpen={(value: boolean) => setOpenAddItem(value)} isOpen={openAddItem} />}

        </>
    )
}
