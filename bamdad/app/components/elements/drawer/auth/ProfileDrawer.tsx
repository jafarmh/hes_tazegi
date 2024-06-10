'use client';

import * as yup from "yup";

import { BlueLightBtn, DisableBtnLoadingBlue } from '../../button/Btns';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Back from '@/asset/img/back.svg'
import { CountryId } from "@/utility/Config";
import DrawerBottom from '..'
import ProfileItem from '@/app/components/common/ProfileItem';
import { Register } from '@/app/redux/ApiCall/Auth';
import { RootState } from '@/app/redux/Store';
import SuccessDrawer from '../SuccessDrawer';
import Upload from "../../button/Upload";
import { UserDataRegister } from '@/app/interface/Entity';
import { emptyUserDataRegister } from '@/app/redux/reducer/user/Register';
import { setUserData } from '@/app/redux/reducer/user';
import { useCookies } from "react-cookie";
import useRtlLtr from "@/app/hooks/RtlLtr";
import { useTranslation } from "react-i18next";
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function ProfileDrawer(props: Props) {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const schema = yup.object({
        name: yup.string().required(t("nameReq")),
        //mobile: yup.string().required(t("mobileReq")),
        about: yup.string().required(t("aboutReq")),
        address: yup.string().required(t("addressReq")),
        email: yup.string().required(t("emailReq")).email(''),
        managerName: yup.string().required(t("managerNameReq")),

    }).required();
    const { register, handleSubmit, setValue, resetField, getValues, control, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [openSuccess, setOpenSuccess] = useState(false);
    const FormsItem = useSelector((state: RootState) => state.RegisterParam)
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const onSubmit: SubmitHandler<UserDataRegister> = param => {
        let params: any = param;
        params['type'] = FormsItem.type ?? 'company';
        let countries = [{ id: CountryId }]
        let categories = [{ id: 1 }]
        if (FormsItem.countries !== undefined) {
            if (FormsItem.countries.length > 0) {
                countries = []
                FormsItem.countries.forEach(item => {
                    countries.push({ id: item })
                });
            }
        }

        if (FormsItem.categories !== undefined) {
            if (FormsItem.categories.length > 0) {
                categories = [];
                FormsItem.categories.forEach(item => {
                    categories.push({ id: item?.id })
                });
            }
        }
        params['mobile'] = FormsItem.mobile;
        params['countries'] = countries
        params['categories'] = categories;



        if (params?.image === '') {
            delete (params['image']);
        }


        if (params?.resumeF === '') {
            delete (params['resumeF']);
        }


        setLoading(true);
        setDisabled(true);

        Register(param, (res: any) => {
            setLoading(false);
            setDisabled(false);
            if (res) {
                //SetCooke(res.token, "0VbQvSw1sB");
                dispatch(setUserData(res.user))
                dispatch(emptyUserDataRegister());
                setOpenSuccess(true)
                window.localStorage.setItem('0VbQvSw1sB', res.token);
                //let d = new Date();
                //setCookie("0VbQvSw1sB", res.token, {  maxAge: d.getTime() + 365 * 24 * 60 * 60 * 1000 });
            }
        });
    };

    const dir=useRtlLtr()
    
    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='95%' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-6  mt-5" dir={dir} >
                    <div className="flex flex-row">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("profileCompleted")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>

                        <ProfileItem
                            Controller={Controller}
                            control={control}
                            getValues={getValues}
                            code={'+98' ?? FormsItem.code}
                            register={register}
                            reset={resetField}
                            setValue={setValue}
                            errors={errors}
                            showMobile={false}
                             />

                        <div className="flex flex-row w-full mb-5 gap-x-2 ">
                            <DisableBtnLoadingBlue disabled={disabled} loading={loading} type='submit' click={() => { }}
                                text={disabled ? t("completeAllField") : t("confirm")} />
                        </div>
                    </form>
                </div>


            </DrawerBottom>

            {openSuccess && <SuccessDrawer
                text={
                    <>
                        <div className="flex flex-col justify-center items-center gap-y-3">
                            <div>
                                <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[var(--blueColor)] to-[var(--blue)] '>{t("great")}!</p>
                            </div>
                            <div className=''>
                                <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[var(--blueColor)] to-[var(--blue)] '>
                                    {t("successCreateAccount")}
                                </p>
                            </div>

                        </div>
                    </>
                }
                changeOpen={(value: boolean) => setOpenSuccess(value)} isOpen={openSuccess} />}



        </>
    )
}
