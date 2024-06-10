'use client'

import React, { useState } from 'react'

import AuthCodeInput from '../../inputs/AuthCodeInput';
import DrawerBottom from '..'
import InputGray from '../../inputs';
import Link from 'next/link';
import NumberFormatsGray from '../../inputs/NumberFormats';
import { OrangLightBtn } from '../../button/Btns'
import refresh from '@/asset/img/refresh.svg';
import { useRouter } from 'next/navigation';
import useRtlLtr from '@/app/hooks/RtlLtr';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function ResendCodeLoginDrawer(props: Props) {

    const router = useRouter();
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const dir=useRtlLtr()

    return (
        <>

            <DrawerBottom isOpen={openM} changeOpen={change} height='210px' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-2 mb-4   mt-2 text-center" dir={dir}>

                    <div className="flex flex-row justify-center">
                        <b>ارسال کد تایید</b>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[var(--gray)] text-sm">
                            کد ارسال شده به شماره 0912565154241 را وارد نمایید:
                        </p>
                    </div>
                    <div dir='ltr' className="  w-full flex flex-row justify-center gap-x-2">
                        <AuthCodeInput change={(data:any)=>console.log(data)} value=''/>
                        {/* {[1,2,3,4,5].map((item)=>(<div className='w-14'><NumberFormatsGray key={`login-mobile_${item}`}  /></div>))} */}
                    </div>
                 
                    <div className="flex flex-row w-full gap-x-2">

                        <OrangLightBtn click={() =>  router.push("/home") } icon={<img src={refresh.src}/>} text='ارسال مجدد' />

                    </div>




                </div>

            </DrawerBottom>
        </>
    )
}
