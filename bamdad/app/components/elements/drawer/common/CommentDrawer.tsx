import * as yup from 'yup'

import { BlueGradinBtn, BlueLightBtn, BlueLightWithoutTxtBtn, DisableBtnLoadingBlue, DisableBtnLoadingBlueGradin } from '../../button/Btns';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

import { AddNewComment } from '@/app/redux/ApiCall/ExportSolution';
import Back from '@/asset/img/back.svg'
import { CommentParamProps } from '@/app/interface/Entity';
import DrawerBottom from '..'
import SuccessDrawer from '../SuccessDrawer';
import TextAreaGray from '../../inputs/TextArea';
import TextSuccess from './TextSuccess';
import { TimeShowSuccessDrawer } from '@/utility/Config';
import { toast } from 'react-toastify';
import useCheckLogin from '@/app/hooks/CheckLogin';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    changeComment: Function,
    window?: () => Window;
    exp_id:string
}
export default function CommentDrawer(props: Props) {
    const {t}=useTranslation();
    const isLogin=useCheckLogin();
    const schema = yup.object({
        text: yup.string().required(t("commentReq")),


    }).required();
    const { register, handleSubmit, setValue,  formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });
    const { isOpen, changeOpen, changeComment,exp_id} = props
    const [openM, setOpenM] = useState(isOpen);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)
    const [rate, setRate] = useState(4)
    const [openSuccess, setOpenSuccess] = useState(false);
 
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    const onSubmit: SubmitHandler<CommentParamProps> = param => {
        if(!isLogin){
            toast.error(t("loginReq"));
            return;
          }
          
        if(param.rate===undefined){
            param['rate']=rate.toString();
        }
    
        param['exp_id']=exp_id;
        setLoading(true);
        setDisabled(true);
        AddNewComment(param,(res:any)=>{
            setLoading(false);
            setDisabled(false);

            if(res){
                changeComment();
                setOpenSuccess(true);
                setTimeout(() => {
                    change(false);
                }, TimeShowSuccessDrawer);
            }
        })


    };
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='370px'>
                <div className="flex flex-col   px-1 mt-5" dir={dir}>
                    <div className="flex flex-row items-center">
                        <div className='flex-grow'><b> {t("commentWrite")}... </b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>

                        <div className="  mt-2 flex flex-col gap-y-2 text-xs ">
                            <div>
                                <p className="text-[var(--gray)] text-sm">{t("commentQ")}</p>
                            </div>
                            <div>
                                <TextAreaGray

                                    name='text'
                                    errors={errors}
                                    register={register}
                                    key='text-area-desc'
                                    placeholder='ثبت نظر'
                                    rows={3} />
                            </div>

                            <div className="flex flex-row justify-between gap-x-1" dir='ltr'>
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div key={`btn-k-${item}`} className='w-14'>
                                        <BlueLightWithoutTxtBtn

                                            click={() => {setValue("rate",item);setRate(item)}}
                                            icon={
                                                <div className={`${item === rate ? "bg-[var(--blue)]" : ""} flex justify-center items-center rounded-[50%] w-8 h-8 border-solid border-2 p-2 border-[var(--blue)]`}>
                                                    <b className={` ${item === rate ? "text-2xl text-white" : "text-[var(--blue)]"}`}>{item}</b>
                                                </div>}
                                        />
                                    </div>))}


                            </div>

                            <div className="w-full">
                            <DisableBtnLoadingBlueGradin disabled={disabled} loading={loading} type='submit' click={() => { }} text={disabled ? t("completeAllField") :t("confirm")} />

                             </div>

                        </div>
                    </form>
                </div>

            </DrawerBottom>

            {
                openSuccess && <SuccessDrawer showHomeLink={false} changeOpen={setOpenSuccess} isOpen={openSuccess} text={<TextSuccess txt={t("commentSuccess")} />} />
            }
        </>
    )
}
