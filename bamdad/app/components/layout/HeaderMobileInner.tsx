'use client'

import Back from '@/asset/img/back.svg'
import BackLink from './BackLink'
import Link from 'next/link'
import Setting from '@/asset/img/setting-2.svg'
import SettingBusinessDrawer from '@/app/components/elements/drawer/business/SettingBusinessDrawer'
import { useRouter } from 'next/navigation'
import useRtlLtr from '@/app/hooks/RtlLtr'
import { useState } from 'react';

interface HeaderMobileInnerProps{
  urlBack:string,
}

export default function HeaderMobileInner(props:HeaderMobileInnerProps) {
  const [openSetting,setOpenSetting]=useState(false);
  const {urlBack}=props
  const router = useRouter()
  const dir=useRtlLtr()

  return <>
    <header dir={dir}>
      <div className="flex flex-col ">
        <div className="  w-full">

          <div className=" flex h-14  items-center flex-row w-full">
            <div onClick={()=>setOpenSetting(true)} className="flex-grow  "><img src={Setting.src} alt="more" /></div>
            <div    className="flex-none   flex gap-x-3  justify-end cursor-pointer">
              <BackLink urlBack={urlBack}/>
     
            </div>
          </div>
        </div>
      </div>
    </header>
    {openSetting&&<SettingBusinessDrawer changeOpen={(value:boolean)=>setOpenSetting(value)} isOpen={openSetting} />}

   </>
}