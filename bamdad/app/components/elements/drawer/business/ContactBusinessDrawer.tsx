import * as yup from 'yup'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Back from '@/asset/img/back.svg'
import Call from '@/asset/img/call.svg';
import { DisableBtnLoadingBlue } from '../../button/Btns';
import DrawerBottom from '..'
import Link from 'next/link';
import Links from '@/asset/img/link.svg';
import { RootState } from '@/app/redux/Store';
import Send from '@/asset/img/send.png'
import { SendContactUs } from '@/app/redux/ApiCall/User';
import Sms from '@/asset/img/sms.svg';
import SuccessDrawer from '../SuccessDrawer';
import TextAreaGray from '../../inputs/TextArea';
import TextSuccess from '../common/TextSuccess';
import { TimeShowSuccessDrawer } from '@/utility/Config';
import instagram from '@/asset/img/instagram.png';
import telegram from '@/asset/img/telegram.png';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
 
    window?: () => Window;
}
export default function ContactBusinessDrawer(props: Props) {
    const dispatch=useDispatch();
    const { isOpen, changeOpen } = props;
    const siteInfo=useSelector((state:RootState)=>state.SiteInfoReducer);
    const [openM, setOpenM] = useState(isOpen);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)
    const {t}=useTranslation();
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    const schema = yup.object({
        txt: yup.string().required('متنی   بنویسید'),

    }).required();
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<any>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<any> = param => {

   


        setLoading(true);
        setDisabled(true);
        SendContactUs(param, (res: any) => {
            setLoading(false);
            setDisabled(false);
            setOpenSuccess(true);
            setTimeout(() => {
                change(false);

            }, TimeShowSuccessDrawer);
        })

    };

    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='90%'>
                <div className="flex flex-col gap-y-6   mt-5" dir={dir}>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("contactUs")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[var(--gray)] text-sm">{siteInfo?.about_us??t("lorm")}</p>
                    </div>
                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <TextAreaGray errors={errors} register={register} name='txt' key='contact-text' placeholder={t("text")} />
                        </div>
                        <div className='w-full'>
                            <DisableBtnLoadingBlue click={()=>{}} disabled={disabled} loading={loading} text={t("sendText")}  icon={<img src={Send.src} alt="send" />} type='submit'/>
                           
                        </div>
                    </form>
                    <div className="flex flex-col gap-y-6 mt-4  items-end  ">
                    <div className='flex flex-row gap-x-2 ' >
                        <div dir='ltr'>
                            <Link href={`tel:${siteInfo?.phone??""}`} className="text-sm text-[var(--gray)] font-bold">
                            {siteInfo?.phone??""}
                            </Link>
                        </div>
                        <div><img src={Call.src} alt="call" /></div>
                    </div>
                    <div className='flex flex-row gap-x-2'  >
                        <div><p className="text-sm text-[var(--gray)] font-bold">{siteInfo?.email??""}</p></div>
                        <div><img src={Sms.src} alt="sms" /></div>
                    </div>
                    <div className='flex flex-row gap-x-2'  >
                        <div><Link target='_blank' href={siteInfo?.link??""} className="text-sm text-[var(--gray)] font-bold">{siteInfo?.link??""}</Link></div>
                        <div><img src={Links.src} alt="call" /></div>
                    </div>

                    <div className='flex flex-row gap-x-2' >
                        <div><p className="text-sm text-[var(--gray)] font-bold">{siteInfo?.instagram??""}</p></div>
                        <div><img src={instagram.src} alt="call" /></div>
                    </div>

                    <div className='flex flex-row gap-x-2' >
                        <div><p className="text-sm text-[var(--gray)] font-bold">{siteInfo?.telegram??""} </p></div>
                        <div><img src={telegram.src} alt="call" /></div>
                    </div>
                    
                  
                </div>
                </div>

            </DrawerBottom>

            {openSuccess && <SuccessDrawer changeOpen={setOpenSuccess} isOpen={openSuccess} showHomeLink={false}
                text={<TextSuccess txt={t("successAdd")} />
                } />}

        </>
    )
}
