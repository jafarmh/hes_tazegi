'use client'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import AddMenuBusinessDrawer from '@/app/components/elements/drawer/business/AddMenuBusinessDrawer'
import Link from 'next/link';
import LogoImg from './LogoImg';
import { RootState } from '@/app/redux/Store';
import shopAdd from '@/asset/img/shopAdd.png';
import useRtlLtr from '@/app/hooks/RtlLtr';
import useSiteInfoGetData from '@/app/hooks/SiteInfo';

export default function HeaderMobile(props: { HaveAction: boolean }) {
  const { HaveAction } = props
  const [openAddItem, setOpenAddItem] = useState(false);
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
            <div className="flex-grow  mt-4">
              <span className="text-[var(--black)]">
                <Link href={siteInfo?.link}><LogoImg/></Link>
              </span>
            </div>
            {HaveAction && <div onClick={HaveAction ? () => setOpenAddItem(true) : () => { }} className="flex-none cursor-pointer  flex gap-x-3  justify-end">
              <img src={shopAdd.src} alt='app-login' />
            </div>}
          </div>



        </div>
      </div>
    </header>
    {openAddItem && <AddMenuBusinessDrawer changeOpen={(value: boolean) => setOpenAddItem(value)} isOpen={openAddItem} />}

  </>
}