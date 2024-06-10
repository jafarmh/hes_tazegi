'use client'

import React, { useState } from 'react'

import DrawerBottom from '..'
import LogoutLiner from '@/asset/img/logoutLiner.png'
import { useRouter } from 'next/navigation';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function LogoutBusinessDrawer(props: Props) {
    const {t}=useTranslation();
    const Route=useRouter();
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);


    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    const Logout=()=>{
        window.localStorage.removeItem("0VbQvSw1sB");
        Route.push("/")

    }
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='190px'>
                <div className="flex flex-col gap-y-2 px-4 mt-2 text-center" dir={dir}>
                    <div className="flex flex-row justify-center">
                        <img src={LogoutLiner.src} alt="logout" />
                    </div>
                    <div>
                        <b className='text-[var(--black)]' >{t("logout")}</b>
                    </div>
                    <div className="flex flex-row w-full gap-x-2 ">
                        <div className=' basis-1/2'>
                            <button onClick={()=>change(false)} className='bg-[var(--lightBlue)] w-full rounded-lg p-2'><span className='text-[var(--blue)]'>{t("no")}</span></button>
                        </div>
                        <div className=' basis-1/2'>
                            <button onClick={()=>Logout()} className='bg-[var(--lightOrang)] w-full rounded-lg p-2'><span className='text-[var(--orang)]'>{t("yes")}</span></button>
                        </div>
                    </div>




                </div>

            </DrawerBottom>



        </>
    )
}
