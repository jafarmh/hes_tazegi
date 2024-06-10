import * as yup from "yup";

import { AddNewB, GetMuListB } from "@/app/redux/ApiCall/Brochure";
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react'
import { emptyBrochureMeData, setBrochureMeData } from "@/app/redux/reducer/user/Brochure";

import Back from '@/asset/img/back.svg'
import { BrochureData } from "@/app/interface/Entity";
import { DisableBtnLoadingBlue } from '../../button/Btns';
import DrawerBottom from '..'
import InputGray from '../../inputs';
import SuccessDrawer from "../SuccessDrawer";
import TextAreaGray from '../../inputs/TextArea';
import TextSuccess from "../common/TextSuccess";
import { TimeShowSuccessDrawer } from "@/utility/Config";
import Upload from '../../button/Upload';
import { emptyBrochureDetailData } from "@/app/redux/reducer/user/BrochureDetail";
import { useDispatch } from "react-redux";
import useRtlLtr from "@/app/hooks/RtlLtr";
import { useTranslation } from "react-i18next";
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function AddEditBrochureBusinessDrawer(props: Props) {

    const {t}=useTranslation();
    const schema = yup.object({
        title: yup.string().required(t("titleReq")),
        description: yup.string().required(t("descriptionReq")),
     
    }).required();
    const { register, handleSubmit, setValue,getValues,resetField,control, formState:{ errors } } = useForm<any>({resolver: yupResolver(schema)});
    const [openSuccess, setOpenSuccess] = useState(false);
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const dispatch = useDispatch()
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)

    
    useEffect(()=> {
        dispatch(emptyBrochureDetailData());
       
    },[])

    const onSubmit: SubmitHandler<BrochureData> = param => {
        let params:any=param;
        setLoading(true);
        setDisabled(true);
        
            
        if(params?.image===''){
            delete (params['file']);
        }

        AddNewB(params, (res: any) => {
            setLoading(false);
            setDisabled(false);
            if (res) {
               
                GetMuListB("1",(res:any)=>{
                    if(res){ 
                        dispatch(emptyBrochureMeData());
                        dispatch(setBrochureMeData(res.data));
                    }
                })
                setOpenSuccess(true);
                setTimeout(() => {
                    change(false);
                }, TimeShowSuccessDrawer);

            }
        });
    };
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='95%'>
                <div className="flex flex-col gap-y-6  mt-5" dir={dir} >
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b>افزودن بروشور</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>

                    
                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>

                    <div >
                        <InputGray register={register} errors={errors} name='title'  key='bp-name' placeholder={t("title")}/>
                    </div>
                 
            
                    <div className='w-full'>
                        <TextAreaGray register={register} errors={errors} name='description'  key='bp-decs-about' placeholder={t("description")} />
                    </div>
                    <div>
                       <Upload  
                       changeValue={(file: any) => {}}
                       Controller={Controller}
                       control={control}
                       getValues={getValues}
                       name="file"
                       reset={resetField}

                        />
                    </div>
                    <div className="flex flex-row w-full mb-5 gap-x-2 ">
                            <DisableBtnLoadingBlue disabled={disabled} loading={loading} type='submit' click={() => { }} text={disabled ? t("completeAllField") : t("confirm")} />
                        </div>
                    </form>
                </div>

            </DrawerBottom>


            {
                openSuccess && <SuccessDrawer showHomeLink={false} changeOpen={setOpenSuccess} isOpen={openSuccess} text={<TextSuccess txt={t("successAdd")} />} />
            }
        </>
    )
}
