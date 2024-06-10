'use client'

import EmptySearch from './EmptySearch';
import ProductServiceItems from './ProductServiceItems';
import React from 'react'
import { RootState } from '@/app/redux/Store'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

export default function ServicesList({searchClick=false}:{searchClick?:boolean}) {
  const {t}=useTranslation();
  const datas=useSelector((state:RootState)=>state.Search.services);

  return (
    <>
         {datas.length > 0 &&
        <>
          <div className="flex flex-row mb-2 mt-5">
            <div className='flex-grow'><b className='text-[var(--black)]' >{t("services")}</b></div>
            <div className='flex-none text-[var(--blueColor)]'>

            </div>
          </div>
          <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
            {datas.map((item) => (
              <ProductServiceItems data={item} />
            ))}

          </div>
        </>
      }
      {datas.length<=0 && searchClick && <EmptySearch/>}
    
    </>
  )
}
