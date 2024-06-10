import React from 'react'
import Sms from '@/asset/img/sms.png'

interface inputProps {
    placeholder: string,
    key: string,
    id?: string,
    name: string,
    changeValue?:Function,
    register:any,
    errors:any,
    required?:boolean,
}

export default function EmailGray(props: inputProps) {

    const { placeholder, key, id = "", name = "",changeValue ,register,errors={},required=false} = props;

    return (
        <>
            <div key={key} className={`flex flex-row gap-x-2 bg-[var(--lightGray)] p-3 rounded-xl`}>
                <div>
                    <img src={Sms.src} alt="email" />
                </div>
                <div>
                    <input className='border-none focus:border-white outline-none bg-transparent w-full' 
                    type="email" 
                    name={name}
                    {...register(name??"firstName")} 
                     id={id}
                     placeholder={`${placeholder}${required?"*":""}` }
                     onChange={(event:any)=>{changeValue?changeValue(event.target.value):()=>{}}}
                     autoComplete='off'
                     />
                </div>
            </div>
            <div>
            <p className='text-red-400 font-bold text-sm m-2'>{errors[name]?.message}</p>

            </div>
        </>
    )
}
