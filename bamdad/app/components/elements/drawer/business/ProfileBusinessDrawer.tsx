import * as yup from 'yup';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { EditProfile, GetMyProfile } from '@/app/redux/ApiCall/User';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Back from '@/asset/img/back.svg'
import { DisableBtnLoadingBlue } from '../../button/Btns';
import DrawerBottom from '..'
import ProfileItem from '@/app/components/common/ProfileItem';
import { RootState } from '@/app/redux/Store';
import SuccessDrawer from '../SuccessDrawer';
import TextSuccess from '../common/TextSuccess';
import { TimeShowSuccessDrawer } from '@/utility/Config';
import { UserDataRegister } from '@/app/interface/Entity';
import { setProfileData } from '@/app/redux/reducer/user/Profile';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function ProfileBusinessDrawer(props: Props) {
    const {t}=useTranslation();
    const ProfileData = useSelector((state: RootState) => state.profile)
    const dispatch = useDispatch();
    const schema = yup.object({
        name: yup.string().required(t("nameReq")),
        mobile: yup.string().required(t("mobileReq")),
        about: yup.string().required(t("aboutReq")),
        address: yup.string().required(t("addressReq")),
        email: yup.string().required(t("emailReq")).email(''),
        managerName: yup.string().required(t("managerNameReq")),

    }).required();
    const { register, handleSubmit, setValue,getValues,resetField,control, formState: { errors }, reset } = useForm<any>({ resolver: yupResolver(schema), defaultValues: ProfileData });
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    useEffect(() => {
        if (ProfileData) {
            reset(ProfileData);
        }
    }, [ProfileData])

    const onSubmit: SubmitHandler<UserDataRegister> = param => {
        param['mobile']= param.mobile.charAt(0)=="0"?param.mobile:"0" +param.mobile;
        ///@ts-ignore
        delete (param['attach']);
        ///@ts-ignore
        delete (param['categories']);
        ///@ts-ignore
        delete (param['countries']);

        ///@ts-ignore
        delete (param['countries']);

        ///@ts-ignore
        delete (param['countries']);
        ///@ts-ignore
        if(param?.image===''){
            delete (param['image']);
        }

        ///@ts-ignore
        if(param?.resumeF===''){
            delete (param['resumeF']);
        }
 
        setLoading(true);
        setDisabled(true);
        EditProfile(param, (res: any) => {
            setLoading(false);
            setDisabled(false);
            GetMyProfile((res: any) => {
                if (res) {
                    dispatch(setProfileData(res))
                }
            })
        
            setOpenSuccess(true);
            setTimeout(() => {
                change(false);

            }, TimeShowSuccessDrawer);
        })

    };
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='95%'>
                <div className="flex flex-col gap-y-6   mt-5" dir={dir} >
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("profileCompleted")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>

                        <ProfileItem 
                        datas={ProfileData} 
                        register={register}
                         setValue={setValue} 
                         errors={errors} 
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

            {openSuccess && <SuccessDrawer changeOpen={setOpenSuccess} isOpen={openSuccess} showHomeLink={false}
                text={<TextSuccess txt={t("profileEditedSuccess")} />
                } />}

        </>
    )
}
