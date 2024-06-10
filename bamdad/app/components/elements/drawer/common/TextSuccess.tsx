import React from 'react'
import { useTranslation } from 'react-i18next'

export default function TextSuccess(
    {
        txt
    }:{
        txt:string
    }
) {
    const {t}=useTranslation();
    return (
        <div className="flex flex-col justify-center items-center gap-y-3">
            <div>
                <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[var(--blueColor)] to-[var(--blue)] '>{t("great")}!</p>
            </div>
            <div className=''>
                <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[var(--blueColor)] to-[var(--blue)] '>
                    {txt}
                </p>
            </div>

        </div>
    )
}
