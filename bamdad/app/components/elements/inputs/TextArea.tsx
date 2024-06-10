import React from 'react'

interface inputProps {
    placeholder: string,
    key: string,
    id?: string,
    name: string,
    cols?: number,
    rows?: number,
    changeValue?: Function
    register: any,
    errors: any,
    required?:boolean,
}

export default function TextAreaGray(props: inputProps) {

    const { placeholder, key, id = "", name = "", cols, rows, changeValue, register, errors = {},required=false } = props;

    return (
        <>
            <div key={key} className={`flex flex-row gap-x-2 bg-[var(--lightGray)] p-3 rounded-xl`}>
                <div className='flex-grow'>
                    <textarea
                        className='border-none w-full focus:border-white outline-none bg-transparent'
                        cols={cols ?? 10}
                        rows={rows ?? 2}
                        name={name}
                        id={id}
                        {...register(name)}
                        placeholder={`${placeholder}${required?"*":""}` }
                        onChange={(event: any) => { changeValue ? changeValue(event.target.value) : () => { } }}
                    >

                    </textarea>
                </div>
            </div>
            <div>
                <p className='text-red-400 font-bold text-sm m-2'>{errors[name]?.message}</p>

            </div>
        </>
    )
}
