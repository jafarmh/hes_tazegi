import React, { useState } from 'react'

import { PatternFormat } from 'react-number-format';
import Sms from '@/asset/img/sms.png'
import { ValueNumberFormat } from '@/app/interface/Element';

interface inputProps {
    placeholder: string,
    key: string,
    id?: string,
    name: string,
    values?:string,
    ChangeValue?: (data:ValueNumberFormat)=>any
    register:any,
    errors:any,
    code?:string,
    getValues: Function,

}

export default function MobileGray(props: inputProps) {

    const { placeholder,
         key, id = "",
     name = "",
     values="",
     ChangeValue,
     register,
     errors={},

     getValues,

     code } = props;

    
    return (
        <>
            <div key={key} dir='ltr'  className={` flex flex-row gap-x-2 bg-[var(--lightGray)] p-3 rounded-xl`}>
                <PatternFormat
   
                    defaultValue={getValues(name)?.length>10?getValues(name).slice(1):getValues(name)??values}
                    onValueChange={ ChangeValue ? (data: any) =>{ChangeValue(data);} :  (data: any) =>{} }
                    className='w-full bg-transparent outline outline-transparent !font-sans '
                    format={`${code??"+98"} ### ###-####`}
                    allowEmptyFormatting mask="_"
                    {...register(name??"firstName")}  
                    />


            </div>
            <div>
                <p className='text-red-400 font-bold text-sm m-2'>{errors[name]?.message}</p>

            </div>
                    </>
    )
}
