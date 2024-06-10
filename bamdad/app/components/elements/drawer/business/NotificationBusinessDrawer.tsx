'use client'

import React, { useState } from 'react'

import Back from '@/asset/img/back.svg'
import DrawerBottom from '..'
import SwitchE from '../../switch/Switch'
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next'

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function NotificationBusinessDrawer(props: Props) {

    const { isOpen, changeOpen } = props
    const {t}=useTranslation()
    const [openM, setOpenM] = useState(isOpen);

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='400px'>
                <div className="flex flex-col   px-4 mt-5" dir={dir}>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("notifications")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>

                    <div className="p-2 mt-5 flex flex-col gap-y-10 text-xs ">

                        {[1, 2, 3, 4].map(() => (
                            <div className="flex flex-row gap-x-1  items-center ">
                                <div className='flex-grow text-right'>
                                    <p className='text-[var(--gray)] text-[14px] font-[500]'>{t("notificationAlarm")} </p>
                                </div>
                                <div> <SwitchE ChangeValue={(value:any)=>console.log(value)}/> </div>
                            </div>
                        ))}
 
                    </div>

                </div>

            </DrawerBottom>
        </>
    )
}
