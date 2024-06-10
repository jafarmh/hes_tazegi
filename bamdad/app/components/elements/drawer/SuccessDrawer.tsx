'use client'

import React, { useState } from 'react'

import { BlueLightBtn } from '../button/Btns';
import DrawerBottom from '.'
import IconSuccess from '@/asset/img/IconSuccess.png';
import Success from '@/asset/img/Success.svg';
import { useRouter } from 'next/navigation';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
    text: React.ReactNode,
    showHomeLink?: boolean
}
export default function SuccessDrawer(props: Props) {

    const {t}=useTranslation();
    const { isOpen, changeOpen, text, showHomeLink = true } = props
    const [openM, setOpenM] = useState(isOpen);
    const router = useRouter();

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const dir=useRtlLtr()
    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height={!showHomeLink?'360px':'430px'} backgroundColor='transparent'>
                <div className="flex flex-col gap-y-6   mt-5" dir={dir}>
                    <div className='flex flex-row justify-center relative'>
                        <div>
                            <img src={IconSuccess.src} alt="IconSuccess" />
                        </div>
                        <div className='absolute top-10'> <img src={Success.src} alt="success" /></div>
                    </div>

                    <div>
                        {text}
                    </div>
                   {showHomeLink&&<div className='w-full'>
                        <BlueLightBtn click={() => router.push("/home")} text={t("home")} />
                    </div>}
                </div>

            </DrawerBottom>



        </>
    )
}
