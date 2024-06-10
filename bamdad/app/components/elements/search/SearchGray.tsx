import React from 'react'
import SearchIcon from '../../../../asset/img/search.svg'
import { useTranslation } from 'react-i18next'

export default function SearchGray({changeValue}:{changeValue:Function}) {
    const {t}=useTranslation();
    return (
        <>
            <div className={`flex flex-row gap-x-2 bg-[var(--lightGray)] p-3 rounded-xl`}>
                <div><img src={SearchIcon.src} alt="search" /></div>
                <div><input onChange={(event:any)=>changeValue(event.currentTarget.value)} 
                className='border-none focus:border-white outline-none bg-transparent'
                 type="text" name="" id=""
                 placeholder={`${t("search")}...`} />
                 </div>
            </div>
            </>
    )
}
