'use client';

import { BlueLightBtn, OrangLightBtn } from '../../button/Btns'
import React, { useState } from 'react'
import { setUserCountryRegister, setUserDataRegister } from '@/app/redux/reducer/user/Register'

import CategoryDrawer from './CategoryDrawer';
import CountryDrawer from './CountryDrawer'
import DrawerBottom from '..'
import EditBlue from '@/asset/img/editBlue.svg'
import InfoLoginDrawer from './InfoLoginDrawer'
import Share from '@/asset/img/share.svg'
import Trash from '@/asset/img/trash.svg'
import { useDispatch } from 'react-redux'
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next'

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function PersonTypeDrawer(props: Props) {
    const {t}=useTranslation();
    const dispatch=useDispatch();
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [openCountrySelect,setOpenCountrySelect]=useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    const clickFun=(type:"general" | "company")=>{
        dispatch(setUserCountryRegister({type}))
       // setOpenCountrySelect(true)
       setOpenCategory(true)
    }
    const dir=useRtlLtr()

    return (
        <>
        

            <DrawerBottom isOpen={openM} changeOpen={change} height='170px' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-2 mb-4 px-4 mt-2 text-center" dir={dir}>
                 
                    
                    <div className="flex flex-col w-full gap-y-6 ">
                        <div className=' basis-1/2'>
                            <BlueLightBtn click={()=>clickFun('general')} text={t("general")}/>
                        </div>
                        <div className=' basis-1/2'>
                            <OrangLightBtn click={()=>clickFun('company')}  text={t("company")}/>
                        </div>
                    
                    </div>




                </div>

            </DrawerBottom>

            
            {/* {openCountrySelect && <CountryDrawer changeOpen={(value: boolean) => setOpenCountrySelect(value)} isOpen={openCountrySelect} />} */}
            {openCategory && <CategoryDrawer changeOpen={(value: boolean) => setOpenCategory(value)} isOpen={openCategory} />}

        </>
    )
}
