'use client'

import Back from '@/asset/img/back.svg'
import BackLink from './BackLink'
import { HeaderMobileMoreProps } from '@/app/interface/Headers'
import Link from 'next/link'
import More from '@/asset/img/more.svg'
import SettingBusinessDrawer from '@/app/components/elements/drawer/business/SettingBusinessDrawer'
import ShareBusinessDrawer from '../elements/drawer/business/ShareBusinessDrawer'
import useRtlLtr from '@/app/hooks/RtlLtr'
import { useState } from 'react';

export default function HeaderMobileInnerMor(props: HeaderMobileMoreProps) {
  const [openShare, setOpenShare] = useState(false);
  const { urlBack,reportId } = props
  const dir=useRtlLtr()

  return <>
    <header dir={dir}>
      <div className="flex flex-col ">
        <div className="  w-full">

          <div className=" flex h-14  items-center flex-row w-full">
            <div onClick={() => setOpenShare(true)} className="flex-grow  "><img src={More.src} alt="more" /></div>
            <div className="flex-none   flex gap-x-3  justify-end cursor-pointer">
              <BackLink urlBack={urlBack} />

            </div>
          </div>
        </div>
      </div>
    </header>
    {openShare && <ShareBusinessDrawer reportId={reportId} changeOpen={(value: boolean) => setOpenShare(value)} isOpen={openShare} />}
    

  </>
}