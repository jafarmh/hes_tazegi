'use client'

import React, { useState } from 'react'

import Arrow from '@/asset/img/arrow-square-down.png'
import Back from '@/asset/img/back.svg'
import DrawerBottom from '..'
import Loader from '../../Loader';
import { useFContactList } from '@/app/hooks/FContactList';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,

    window?: () => Window;
}
export default function ContactUsListBusinessDrawer(props: Props) {

    const { isOpen, changeOpen } = props;
    const [openM, setOpenM] = useState(isOpen);
    const { data, loading } = useFContactList();
    const { t } = useTranslation();
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }


    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='90%'>
                {loading && <Loader />}
                {!loading && <>
                    <div className='flex flex-col gap-y-4 justify-center'>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("contactUsList")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                        {
                            data.map((item: any) => (
                                <div key={item.id} className='bg-[var(--grayHashtag)] rounded-2xl p-3' >
                                    <div className="flex flex-row items-center">
                                        <div className='flex-grow'><b className='text-[var(--black)]' >{item.txt}</b></div>
                                        <div className='flex-none'></div>
                                    </div>
                                    <div className={`transition-all duration-1000  text-sm text-[var(--gray)] mt-1 opacity-100 h-full visible `}>
                                        <p className={`h-full `}>{item.reply}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </>}


            </DrawerBottom>



        </>
    )
}
