import * as yup from "yup";

import { AddNewB, AddNewFileB, EditP, GetBrochureDetail, GetMuListB, RemoveFileB } from "@/app/redux/ApiCall/Brochure";
import { AttachProps, BrochureData } from "@/app/interface/Entity";
import { BlueLightBtn, DisableBtnLoadingBlue, OrangLightBtn } from '../../button/Btns';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react'
import { emptyBrochureMeData, setBrochureMeData } from "@/app/redux/reducer/user/Brochure";
import { useDispatch, useSelector } from "react-redux";

import ActionsBusinessDrawer from "./ActionsBusinessDrawer";
import Back from '@/asset/img/back.svg'
import BrochureBusinessItem from "./BrochureBusinessItem";
import DrawerBottom from '..'
import InputGray from '../../inputs';
import { RootState } from "@/app/redux/Store";
import ShowAttachWithRemove from "../../Show/ShowAttachWithRemove";
import SuccessDrawer from "../SuccessDrawer";
import TextAreaGray from '../../inputs/TextArea';
import TextSuccess from "../common/TextSuccess";
import { TimeShowSuccessDrawer } from "@/utility/Config";
import Upload from '../../button/Upload';
import { setBrochureDetailData } from "@/app/redux/reducer/user/BrochureDetail";
import { toast } from "react-toastify";
import useRtlLtr from "@/app/hooks/RtlLtr";
import { useTranslation } from "react-i18next";
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function EditBrochureBusinessDrawer(props: Props) {

    const schema = yup.object({
        title: yup.string().required('عنوان الزامی است'),
        description: yup.string().required('متنی برای توضیحات بنویسید'),

    }).required();
    const { register, handleSubmit, setValue, reset,control,getValues,resetField, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });
    const [openSuccess, setOpenSuccess] = useState(false);
    const {t}=useTranslation();
    const Datas = useSelector((state: RootState) => state.BrochureDetail);
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const dispatch = useDispatch()
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (Datas) {
            reset(Datas);
        }
    }, [Datas])

    const RemoveFile = (param: AttachProps) => {
        RemoveFileB(Datas.id.toString(), param.id.toString(), (res: any) => {
            GetBrochureDetail(Datas.id.toString(), (res: any) => {
                if (res) {
                    dispatch(setBrochureDetailData(res));
                }

            })
             
            GetMuListB("1",(res: any) => {
                if (res) {
                    dispatch(emptyBrochureMeData());
                    dispatch(setBrochureMeData(res.data));
                
                }
            })
        })

    }

     const AttachFile=(id:string,file:any )=>{
        return new Promise(resolve=>{
            AddNewFileB(id.toString(),{file},(res:any)=>{resolve(res)})
        }) 
    
    }
    const Submits=async(param:any,id:string,file:any)=>{
        setLoading(true);
        setDisabled(true);
        if(file!==undefined&& file!==''){
            await AttachFile(id,file);
        }
        EditP(param.id.toString(), param, (res: any) => {
            setLoading(false);
            setDisabled(false);
            if (res) {
       
                GetMuListB("1",(res: any) => {
                    if (res) {
                        //dispatch(setBrochureMeData(res.data));
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
    }

    const onSubmit: SubmitHandler<any> = param => {
   
        let file=param.file;
        let id=param.id;
        delete(param['file'])
        Submits(param,id,file);
    };

    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='95%'>
                <div className="flex flex-col gap-y-6  mt-5" dir={dir} >
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("edit")} {Datas.title}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                    <div>
                        <ShowAttachWithRemove attach={Datas.attach} RemoveF={RemoveFile} />
                    </div>

                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("id")} hidden name='id' />

                        <BrochureBusinessItem
                         register={register}
                         errors={errors} 
                         setValue={setValue}
                         Controller={Controller}
                         control={control}
                         getValues={getValues}
                        
                         reset={resetField}
                          />
                        <div className="flex flex-row w-full mb-5 gap-x-2 ">
                            <DisableBtnLoadingBlue disabled={disabled} loading={loading} type='submit' click={() => { }} text={disabled ? t("completeAllField") : t("confirm")} />
                        </div>
                    </form>
                </div>

            </DrawerBottom>


            {
                openSuccess && <SuccessDrawer showHomeLink={false} changeOpen={setOpenSuccess} isOpen={openSuccess} text={<TextSuccess txt={t("successEdit")} />} />
            }

        </>
    )
}
