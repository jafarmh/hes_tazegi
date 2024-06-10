import React from 'react'

interface inputProps {
    placeholder: string,
    key: string,
    id?: string,
    name: string,
    type?:string,
    changeValue?:Function,
    register:any,
    required?:boolean,
    errors:any
}

export default function InputGray(props:inputProps) {
    
    const {placeholder,key,id="",name="",type="text",changeValue,register,errors,required=false}=props;

    return (
        <>
            <div key={key} className={`flex flex-row gap-x-2 bg-[var(--lightGray)] p-3 rounded-xl`}>
                <div className='flex-grow'>
                    <input className='border-none focus:border-white outline-none bg-transparent w-full'
                     type={type} name={name} id={id} placeholder={`${placeholder}${required?"*":""}` }
                     {...register(name??"firstName")} 
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
