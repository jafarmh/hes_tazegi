'use client';

import { BlueLightBtn, DisableBtn, DisableBtnLoadingBlue } from '../../button/Btns'
import React, { useState } from 'react'

import ConfirmCodeLoginDrawer from './ConfirmCodeLoginDrawer';
import DrawerBottom from '..'
import Link from 'next/link';
import MobileGray from '../../inputs/Mobile';
import { SendOtp } from '@/app/redux/ApiCall/Auth';
import { ValueNumberFormat } from '@/app/interface/Element';
import { error } from 'console';
import { setOtpCode } from '@/app/redux/reducer/Otp';
import { setUserCountryRegister } from '@/app/redux/reducer/user/Register';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function WelcomeLoginDrawer(props: Props) {

    const dispatch = useDispatch()
    const { isOpen, changeOpen } = props
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false)
    const [mobile, setMobile] = useState('');
    const [openM, setOpenM] = useState(isOpen);
    const [openConfirmCodeLogin, setOpenConfirmCodeLogin] = useState(false);
    const {t}=useTranslation();
    const { register, formState: { errors },getValues } = useForm();
    const router=useRouter();

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const ChangeNumberMobile = (data: ValueNumberFormat) => {
        let value = data.value
        if (value.length === 10) {
            setDisabled(false);
            setMobile(value);
        } else {
            setDisabled(true);
            setMobile('');
        }
    }
    const SubmitMobile = () => {

        setLoading(true);
         setDisabled(true);
        SendOtp('0' + mobile, (res: any) => {
            
            setLoading(false);
            setDisabled(false);
            if (res!==false) {
                
                toast.success(t("sendConfirmCodeSuccess"))
                dispatch(setOtpCode({ code: '', mobile: mobile }))
                setOpenConfirmCodeLogin(true)
                // if(res.exist){
                //     dispatch(setOtpCode({ code: '', mobile: mobile }))
                //     setOpenConfirmCodeLogin(true)
                // }else{
                //     dispatch(setUserCountryRegister({ mobile: mobile}))
                //     router.push("/register")
                // }
         
            }
        })

    }
    const dir=useRtlLtr()

    return (
        <>


            <DrawerBottom isOpen={openM} changeOpen={change} height='250px' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-2 mb-4   mt-2 text-center" dir={dir}>

                    <div className="flex flex-row justify-center">
                        <b> {t("welcome")}</b>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[var(--gray)] text-sm">
                            {t("welcomeTxt")}
                        </p>
                    </div>
                    <div  className="  w-full">
                        <MobileGray errors={errors} getValues={getValues} register={register} name='mobile' values={mobile} ChangeValue={(data: ValueNumberFormat) => ChangeNumberMobile(data)} key='login-mobile' placeholder='' />
                    </div>
                    <div className="flex flex-row w-full gap-x-2 ">
                        {disabled&&!loading&& <DisableBtn 
                            click={()=>{}}
                            text={t("sendCodeLogin")}/>}
                        {((!disabled&&!loading)||(disabled&&loading))&&<DisableBtnLoadingBlue click={SubmitMobile} text={t("sendCodeLogin")} loading={loading} disabled={disabled} />}
                    </div>
                    {/* <div className="w-full">
                        <Link href={"/register"}><p className="text-[var(--gray)] text-sm"> {t("register")}</p></Link>
                    </div> */}
                </div>
            </DrawerBottom>
            {openConfirmCodeLogin && <ConfirmCodeLoginDrawer changeOpen={(value: boolean) => setOpenConfirmCodeLogin(value)} isOpen={openConfirmCodeLogin} />}

        </>
    )
}
