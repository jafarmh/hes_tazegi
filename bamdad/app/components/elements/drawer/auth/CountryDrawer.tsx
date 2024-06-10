'use client';

import { BlueLightBtn, OrangLightBtn } from '../../button/Btns'
import React, { useEffect, useState } from 'react'

import CategoryDrawer from './CategoryDrawer'
import { CountryProps } from '@/app/interface/Entity'
import CountrySelect from '../../autoComplete/CountrySelect'
import DrawerBottom from '..'
import { GetCountry } from '@/app/redux/ApiCall/General'
import { setDataCountry } from '@/app/redux/reducer/general/Country'
import { setUserCountryRegister } from '@/app/redux/reducer/user/Register'
import { useDispatch } from 'react-redux'
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next'

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function CountryDrawer(props: Props) {

    const {t}=useTranslation();
    const { isOpen, changeOpen } = props
     const [openM, setOpenM] = useState(isOpen);
    const [openCategory, setOpenCategory] = useState(false);
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
 
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='90%' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-2 mb-4 px-4 mt-2 w-full text-center relative" dir={dir}>
                    <div className="w-full">
                        <b className='text-[var(--black)]' >{t("chooseCountry")}</b>
                    </div>
                    <div className=" w-full   mb-10">
                        <CountrySelect  />
                    </div>
                    <div className="flex flex-row  right-[50%] translate-x-[50%] max-[550px]:w-[70%] w-[40%]  gap-x-2 fixed bottom-0">
                        <div className='w-full  '>
                            <BlueLightBtn click={() => setOpenCategory(true)} text={t("confirm")} />
                        </div>
                        <div className='w-full '>
                            <OrangLightBtn click={() => setOpenCategory(true)} text={t("rejected")} />
                        </div>
                    </div>
                </div>
            </DrawerBottom>
            {openCategory && <CategoryDrawer changeOpen={(value: boolean) => setOpenCategory(value)} isOpen={openCategory} />}

        </>
    )
}
