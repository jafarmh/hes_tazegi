import InputGray from '../../inputs'
import React from 'react'
import TextAreaGray from '../../inputs/TextArea'
import Upload from '../../button/Upload'
import { useTranslation } from 'react-i18next'

export default function BrochureBusinessItem(props:any) {
    const {t}=useTranslation()
    const {register,errors,setValue,Controller,control,getValues,reset}=props
    return (
        <>
            <div >
                <InputGray register={register} errors={errors} name='title' key='bp-name' placeholder={t("title")} />
            </div>


            <div className='w-full'>
                <TextAreaGray register={register} errors={errors} name='description' key='bp-decs-about' placeholder={t('description')} />
            </div>
            <div>
                <Upload 
                changeValue={(file: any) => console.log("file", file)}
                Controller={Controller}
                control={control}
                getValues={getValues}
                name="file"
                reset={reset}
                 />
            </div>
        </>
    )
}
