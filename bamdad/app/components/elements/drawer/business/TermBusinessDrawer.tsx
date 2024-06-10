import React, { useState } from 'react'

import Back from '@/asset/img/back.svg'
import DrawerBottom from '..'
import IconSuccess from '@/asset/img/IconSuccess.png';
import Logo from '@/asset/img/LogoBlue.png';
import Send from '@/asset/img/send.png'
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

// import Logo from '@/asset/img/SuccessLogo.png';



interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
    data:string
}
export default function TermBusinessDrawer({ isOpen, changeOpen,data }: Props) {
    const {t}=useTranslation();
    const [openM, setOpenM] = useState(isOpen);

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='90%'>
                <div className="flex flex-col gap-y-6  mt-5" dir={dir}>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("term")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>

                    
              
                  
                    <div>
                    <p className='text-[var(--gray)] text-sm' dangerouslySetInnerHTML={{ __html:data }}></p>

                    </div>
                      
                </div>

            </DrawerBottom>



        </>
    )
}
