'use client'

import { BlueLightBtn } from '../elements/button/Btns';
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function LngItems({click}:{click:Function}) {

    const {t,i18n}=useTranslation();

    const ChangeLng=(lng:string)=>{
        i18n.changeLanguage(lng??"fa");
        window.localStorage.setItem("lng", lng);
    }

    return (
        <>
            <div className=' basis-1/2'>
                <BlueLightBtn click={() => {ChangeLng("en");  click() }} 
                text="English"
                // text={t("English")}
                 />
            </div>
            <div className=' basis-1/2'>
                <BlueLightBtn click={() => { ChangeLng("fa"); click() }} 
                text='فارسی'
                //text={t("farsi")}
                 />
            </div>
            <div className=' basis-1/2'>
                <BlueLightBtn
                    click={() => { ChangeLng("ar"); click() }}
                    text="عربي"
                    //text={t("arabic")}
                     />
            </div>
        </>
    )
}
