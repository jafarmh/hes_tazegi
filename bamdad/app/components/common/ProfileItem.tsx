'use client';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Edit from '@/asset/img/editBlue.svg';
import EmailGray from '../elements/inputs/Email';
import GroupProf from '@/asset/img/GroupProf.png';
import InputGray from '../elements/inputs'
import MobileGray from '../elements/inputs/Mobile'
import { ProfileData } from '@/app/interface/Entity';
import TextAreaGray from '../elements/inputs/TextArea'
import Upload from '../elements/button/Upload'
import { getImageProf } from '@/utility/Function';
import { useTranslation } from 'react-i18next';

interface PropsItemProfile {
    register: any,
    setValue: Function,
    errors: any,
    datas?: ProfileData,
    code?: string,
    Controller: any,
    getValues: Function,
    control: any,
    reset: Function,
    showMobile?:boolean,
}
export default function ProfileItem({ register, reset, setValue, errors, datas, code, Controller, getValues, control,showMobile=true }: PropsItemProfile) {

    const { t } = useTranslation();
    const [imgSrc,setImgSrc]=useState(Edit.src);
    const ChangeItems = (name: string, value: any) => {
        setValue(name, value);
    }

    useEffect(()=>{
        if(getValues("image")!==''&&getValues("image")!==undefined){
            SetImg(getValues("image"))  
        }else{
            setImgSrc(undefined)
        }
    }, [getValues("image")]);

    const SetImg=(img:File)=>{
        let reader = new FileReader();
        reader.readAsDataURL(img);
    
        reader.onloadend = function (e:any) {
            setImgSrc(reader.result)
          };
    }

    return (
        <>
            <div className='flex flex-row justify-center '>
                <div className='flex flex-row justify-center w-72 relative'>
                    <div>
                        <img className='rounded-[50%] w-32 h-32' 
                        src={imgSrc??(datas !== undefined ? datas.attach.length > 0 ? getImageProf(datas.attach)?.path : GroupProf.src : GroupProf.src)} 
                        alt="GroupProf" />
                    </div>
                    <div className='absolute bottom-2 right-20 '>
                        <Upload
                            color='lightBlue'
                            iconImg={Edit.src}
                            text=''
                            width={'14'}
                            height={'14'}
                            padding="0"
                            accept='image/*'
                            changeValue={(file: any) => SetImg( file)}
                            Controller={Controller}
                            control={control}
                            getValues={getValues}
                            name="image"
                            reset={reset}
                            showFileName={false}
                        />

                        {/* <button className='bg-[var(--lightBlue)] p-2 rounded-lg flex justify-center items-center w-10 h-10'>
                        <input
                            className='customFileInput '
                            style={{
                                backgroundImage: `url("${Edit.src}")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: "center"

                            }}
                            onChange={(event: any) => ChangeItems("image", event.target.files[0])} name='image' accept="image/*" type="file" />

                    </button> */}
                    </div>
                </div>
            </div>
            <div>
                <InputGray errors={errors} register={register} name='name' key='bp-name' required placeholder={t("companyName")} />
            </div>

            <div>
                <InputGray errors={errors} register={register} name='managerName' required key='bp-name-company' placeholder={t("managerName")} />
            </div>

            <div>
                <EmailGray errors={errors} register={register} required name='email' key='bp-email' placeholder={t("email")} />
            </div>

            {showMobile&&<div>
                <MobileGray
                    code={code}
                    values={datas !== undefined ? datas.mobile.substring(1) : ""}
                    errors={errors}
                    register={register}
                    name='mobile'
                    ChangeValue={(data) => ChangeItems("mobile", data.value)}
                    key='bp-mobile'
                    placeholder='9012345874' 
                    getValues={getValues}
                    />
            </div>}
            <div className='w-full'>
                <TextAreaGray required errors={errors} name='about' register={register} key='bp-decs-about' placeholder={t("aboutDesc")} />
            </div>
            <div>
                <Upload
                    // changeValue={(file: any) => ChangeItems("resumeF", file)}
                    changeValue={(file: any) => console.log("resumeF", file)}
                    Controller={Controller}
                    control={control}
                    getValues={getValues}
                    name="resumeF"
                    reset={reset}
                />
            </div>
            <div className='w-full'>
                <TextAreaGray errors={errors} name='resume' register={register} key='bp-desc-company' placeholder={t("resumeCompany")} />
            </div>
            <div className='w-full'>
                <TextAreaGray errors={errors} required name='address' register={register} key='bp-desc-company' placeholder={t("address")} />
            </div>
            <div className='w-full'>
                <InputGray errors={errors} register={register} name='webLink' key='bp-webLink' placeholder={t("webLink")} />
            </div>

            {/* <div className='w-full'>
                <InputGray errors={errors} register={register} name='linkedin' key='bp-linkedin' placeholder={t("linkedin")} />
            </div> */}
            <div className='w-full'>
                <InputGray errors={errors} register={register} name='instagram' key='bp-instagram' placeholder={t("instagram")} />
            </div>
            <div className='w-full'>
                <InputGray errors={errors} register={register} name='telegram' key='bp-telegram' placeholder={t("telegram")} />
            </div>
        </>
    )
}
