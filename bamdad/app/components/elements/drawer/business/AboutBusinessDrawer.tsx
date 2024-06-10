import React, { useState } from 'react'
import { getImageProf, getVideoProf } from '@/utility/Function';

import { AttachProps } from '@/app/interface/Entity';
import Back from '@/asset/img/back.svg'
import DrawerBottom from '..'
import IconSuccess from '@/asset/img/IconSuccess.png';
import Logo from '@/asset/img/SuccessLogo.png';
import Send from '@/asset/img/send.png'
import ShowAttach from '../../Show/ShowAttach';
import Videos from '../../Show/Videos';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

//import Logo from '@/asset/img/LogoBlue.png';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
    data: string,
    attach: AttachProps[]
}
export default function AboutBusinessDrawer({ isOpen, changeOpen, data, attach }: Props) {
    const { t } = useTranslation();
    const [openM, setOpenM] = useState(isOpen);

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    const dir = useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='90%'>
                <div className="flex flex-col gap-y-6  mt-5" dir={dir}>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("aboutUs")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>


                    <div className='flex flex-row justify-center relative'>
                        <div>
                            <img src={IconSuccess.src} alt="IconSuccess" />
                        </div>
                        <div className='absolute top-10'> <img className='w-40 h-40 rounded-[50%] object-cover' src={getImageProf(attach)?.path ?? Logo.src} alt="logo" /></div>
                    </div>

                    <div>
                        <p className='text-[var(--gray)] text-sm' dangerouslySetInnerHTML={{ __html: data }}></p>
                    </div>
                   {getVideoProf(attach)&& <div className='mb-24'>
                        <Videos item={getVideoProf(attach)??{id:"",name:"",path:"",type:""}} />
                    </div>}
                </div>

            </DrawerBottom>



        </>
    )
}
