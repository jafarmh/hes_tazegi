'use client'

import { useDispatch, useSelector } from 'react-redux'

import Back from '@/asset/img/back.svg'
import BackLink from './BackLink'
import { HeaderMobileInnerProps } from '@/app/interface/Headers'
import Link from 'next/link'
import LogoImg from './LogoImg'
import { RootState } from '@/app/redux/Store'
import { useEffect } from 'react'
import useRtlLtr from '@/app/hooks/RtlLtr'
import useSiteInfoGetData from '@/app/hooks/SiteInfo'

export default function HeaderMobileBack(props: HeaderMobileInnerProps) {
  const { urlBack } = props
  const dir = useRtlLtr()

  const siteInfo = useSelector((state: RootState) => state.SiteInfoReducer);
  const dispatch=useDispatch();

  useEffect(() => {
    useSiteInfoGetData(dispatch)
  }, [])

  return <>
    <header dir={dir}>
      <div className="flex flex-col ">
        <div className="  w-full">

          <div className=" flex h-14  items-center flex-row w-full">
            <div className="flex-grow  ">
              <span className="text-[var(--black)]">
                <Link href={siteInfo?.link}><LogoImg/></Link>
              </span>
              {/* <span className="text-[var(--black)]">بامداد</span> */}
            </div>
            <div className="flex-none   flex gap-x-3  justify-end cursor-pointer mt-5">
              <BackLink urlBack={urlBack} />

            </div>
          </div>



        </div>
      </div>
    </header>
  </>
}