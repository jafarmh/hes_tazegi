'use client'

import { BlueLightBtn, DisableBtn, DisableBtnLoadingBlue } from '../../button/Btns'
import { Login, SendOtp } from '@/app/redux/ApiCall/Auth';
import React, { useEffect, useState } from 'react'
import { emptyOtpCode, setOtpCode } from '@/app/redux/reducer/Otp';
import { useDispatch, useSelector } from 'react-redux';

import AuthCodeInput from '../../inputs/AuthCodeInput';
import DrawerBottom from '..'
import InputGray from '../../inputs';
import NumberFormatsGray from '../../inputs/NumberFormats';
import ResendCodeLoginDrawer from './ResendCodeLoginDrawer';
import { RootState } from '@/app/redux/Store';
import SuccessDrawer from '../SuccessDrawer';
import TextSuccess from '../common/TextSuccess';
import { TimeShowSuccessDrawer } from '@/utility/Config';
import Timer from '../../countdown/Timer';
import { setUserCountryRegister } from '@/app/redux/reducer/user/Register';
import { setUserData } from '@/app/redux/reducer/user';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function ConfirmCodeLoginDrawer(props: Props) {
    const [cookies, setCookie, removeCookie] = useCookies(['0VbQvSw1sB']);
    const router = useRouter();
    const dispatch = useDispatch();
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [openResendCodeLogin, setOpenResendCodeLogin] = useState(false);
    const Otp = useSelector((state: RootState) => state.otp)
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState('')
    const [codeResend, setCodeResend] = useState(true)
    const { t } = useTranslation();
    const [openSuccess, setOpenSuccess] = useState(false);

 
    useEffect(() => {
        console.log('ruuuuuuuuuuun',navigator);
      let ac = new AbortController();
      setTimeout(() => {
        // abort after 4 minutes
        ac.abort();
      }, 4 * 60 * 1000);

      navigator.credentials
        .get({
            ///@ts-ignore
          otp: { transport: ["sms"] },
          signal: ac.signal
        })
        .then(otp => {
            console.log(otp,'==========================otp');
            ///@ts-ignore
            setCode(otp.code);
            setDisabled(false);
            ///@ts-ignore
            ConfirmCode(otp.code)
            
          //console.log("your otp code is", otp.code);
        })
        .catch(err => {
          console.log(err,'==========================otp errror');
        });
    },[]);
    // useEffect(() => {
    //     if (Otp.code.toString() !== '' && Otp.code.toString().length === 5) {
    //         setDisabled(false);
    //     }
    // }, [Otp])

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    const ChangeValueCode = (data: string) => {

        if (data.length === 5) {
            setDisabled(false);
            setCode(data);
        } else {
            setDisabled(true);
            setCode('');
        }

    }

    const ConfirmCode = (codes=code) => {
        setDisabled(true);
        setLoading(true);
        Login("0" + Otp.mobile, codes, (res: any) => {

            if (res) {
                // dispatch(setUserData(res.user))
                // dispatch(emptyOtpCode());
                // router.push("/home")
                // window.localStorage.setItem('0VbQvSw1sB', res.token);

                if (res.exist) {
                    dispatch(setUserData(res.user))
                    dispatch(emptyOtpCode());
                    window.localStorage.setItem('0VbQvSw1sB', res.token);
                    setOpenSuccess(true);
                    router.push("/home")
                

                  //  setDisabled(false);
                   // setLoading(false);
                } else {
                    dispatch(setUserCountryRegister({ mobile: res.mobile }))
                    router.push("/register")
                    //setDisabled(false);
                    //setLoading(false);
                }

                // let d = new Date();
                //  setCookie('0VbQvSw1sB', res.token, {
                //     path: '/',
                //     maxAge: d.getTime() + 365 * 24 * 60 * 60 * 1000
                //   });
            } else {
                setDisabled(false);
                setLoading(false);
            }
        }
        )

    }

    const ResendCode = () => {
        setCodeResend(true)
        SendOtp('0' + Otp.mobile, (res: any) => {

            if (res !== false) {
                toast.success(t("sendConfirmCodeSuccess"))
                dispatch(setOtpCode({ code: '', mobile: Otp.mobile }))
            }
        })
    }
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='240px' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-2 mb-4   mt-2 text-center" dir={dir}>

                    <div className="flex flex-row justify-center">
                        <b className='text-[var(--black)]' >{t("sendConfirmCode")}</b>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[var(--gray)] text-sm">
                            {t("sendedToPhoneCode")}{Otp.mobile} {t("sendedToPhoneCodeInter")}:
                        </p>
                    </div>
                    <div dir='ltr' className="  w-full flex flex-row justify-center gap-x-2">
                        <AuthCodeInput value={code} change={ChangeValueCode} key={'otpCodeInsert1'} />
                    </div>
                    <div onClick={() => { }} className="text-center w-full  ">
                        {/* <div onClick={() => setOpenResendCodeLogin(true)} className="text-center w-full  "> */}
                        {codeResend && <p className="cursor-pointer text-sm  text-[var(--blueColor)]">{t("sendAgainCode")}
                            <Timer EndFunction={() => setCodeResend(false)} minutes='01' seconds={'59'} />
                            {t("other")}</p>}
                        {!codeResend && <p onClick={() => { ResendCode() }} className="text-sm font-bold  text-[var(--blueColor)]">{t("sendAgain")}</p>}
                    </div>
                    <div className="flex flex-row w-full gap-x-2">

                        <div className="flex flex-row w-full gap-x-2 ">
                            {disabled && !loading && <DisableBtn
                                click={() => { }}
                                text={t("confirmCodeLogin")} />}
                            {((!disabled && !loading) || (disabled && loading)) && <DisableBtnLoadingBlue click={() => ConfirmCode()} text={t("confirm")} loading={loading} disabled={disabled} />}
                        </div>

                    </div>




                </div>

            </DrawerBottom>

            {openResendCodeLogin && <ResendCodeLoginDrawer changeOpen={(value: boolean) => setOpenResendCodeLogin(value)} isOpen={openResendCodeLogin} />}


            {
                openSuccess && <SuccessDrawer showHomeLink={false} changeOpen={setOpenSuccess} isOpen={openSuccess} text={<TextSuccess txt={t("successLogin")} />} />
            }
        </>
    )
}
