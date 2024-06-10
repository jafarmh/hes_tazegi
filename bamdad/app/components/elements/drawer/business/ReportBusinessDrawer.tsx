import * as yup from 'yup'

import React, { useState } from 'react'
import { SendContactUs, SendReport } from '@/app/redux/ApiCall/User';
import { SubmitHandler, useForm } from 'react-hook-form';

import Back from '@/asset/img/back.svg'
import { DisableBtnLoadingBlue } from '../../button/Btns';
import DrawerBottom from '..'
import EmailGray from '../../inputs/Email';
import InputGray from '../../inputs';
import Send from '@/asset/img/send.png'
import SuccessDrawer from '../SuccessDrawer';
import TextAreaGray from '../../inputs/TextArea';
import TextSuccess from '../common/TextSuccess';
import { TimeShowSuccessDrawer } from '@/utility/Config';
import { useDispatch } from 'react-redux';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    reported_id:string
    window?: () => Window;
}
export default function ReportBusinessDrawer(props: Props) {
    const { isOpen, changeOpen,reported_id } = props
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
        txt: yup.string().required(t("descriptionReq2")),

    }).required();
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<any>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<any> = param => {
        setLoading(true);
        setDisabled(true);
        param['reported_id']=reported_id;
        SendReport(param, (res: any) => {
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
            <DrawerBottom isOpen={openM} changeOpen={change} height='350px'>
                <div className="flex flex-col gap-y-6   mt-5" dir={dir}>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("reportR")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>



                        <div>
                            <TextAreaGray errors={errors} register={register} name='txt' key='contact-text' placeholder={t("text")} />
                        </div>
                        <div className='w-full'>
                            <DisableBtnLoadingBlue click={()=>{}} disabled={disabled} loading={loading} text={t("sendText")}  icon={<img src={Send.src} alt="send" />} type='submit'/>
                           
                        </div>
                    </form>
                </div>

            </DrawerBottom>

            {openSuccess && <SuccessDrawer changeOpen={setOpenSuccess} isOpen={openSuccess} showHomeLink={false}
                text={<TextSuccess txt={t("reportAddSuccess")} />
                } />}

        </>
    )
}
