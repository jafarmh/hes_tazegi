import React, { useState } from 'react'

import { NumericFormat } from 'react-number-format';
import Sms from '@/asset/img/sms.png'
import { ValueNumberFormat } from '@/app/interface/Element';
import useRtlLtr from '@/app/hooks/RtlLtr';

interface inputProps {
    key: string,
    id?: string,
    name: string,
    placeholder?: string,
    ChangeValue?: (data:ValueNumberFormat)=>any
    register: any,
    errors: any,
    values?:string,

}

export default function NumberFormatsGray(props: inputProps) {

    const { key, id = "", name = "",values='', placeholder = "", ChangeValue, register, errors } = props;

    const [value,setValue]=useState("");
    const dir=useRtlLtr()

    return (
        <>
            <div key={key} dir={dir} className={`flex flex-row gap-x-2 bg-[var(--lightGray)] p-3 rounded-xl`}>
                <NumericFormat
                    {...register(name )}
                    onValueChange={ ChangeValue ?(data:ValueNumberFormat) => ChangeValue(data) : (data:ValueNumberFormat) => { }}
                    thousandSeparator
                    name={name}
                    placeholder={placeholder}
                    defaultValue={values}
                    value={value}
                    className='bg-transparent outline outline-transparent w-full' />

            </div>
            <div>
                <p className='text-red-400 font-bold text-sm m-2'>{errors[name]?.message}</p>

            </div>
        </>
    )
}
