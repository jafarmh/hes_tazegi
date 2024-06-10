'use client'

import React, { useEffect, useState } from 'react'
import { emptyDataRanks, setDataRanks } from '@/app/redux/reducer/general/Ranks';
import { useDispatch, useSelector } from 'react-redux';

import CNN_p from '@/asset/img/empty.jpg';
import Edit from '@/asset/img/edit.svg';
import { GetMyProfile } from '@/app/redux/ApiCall/User';
import { HeaderBusinessMobilePageProps } from '@/app/interface/Headers';
import Medal from '@/asset/img/medal-star.svg';
import ProfileBusinessDrawer from '@/app/components/elements/drawer/business/ProfileBusinessDrawer';
import { RootState } from '@/app/redux/Store';
import UpgradeDrawer from '../../elements/drawer/business/UpgradeDrawer';
import { getImageProf } from '@/utility/Function';
import { setProfileData } from '@/app/redux/reducer/user/Profile';

export default function Header(props: HeaderBusinessMobilePageProps) {
  const { haveAction = false,data } = props
  const ProfileData = useSelector((state: RootState) => state.profile);
  const [openProfile, setOpenProfile] = useState(false);
  const [openUpgrade, setOpenUpgrade] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (haveAction) {
      GetMyProfile((res: any) => {
        if (res) {
          dispatch(setProfileData(res))
        }
      })
      // dispatch(emptyDataRanks());
      // dispatch(setDataRanks(ranks));
    }
  }, [])


  return (
    <>
      {haveAction ?
        <div className="flex justify-center flex-row items-center gap-x-2"  >
          <div>
            <button onClick={() => setOpenProfile(true)} className='bg-[var(--lightOrang)] p-2 rounded-2xl'><img src={Edit.src} alt="Edit" /></button>
          </div>
          <div><img className='rounded-[50%] w-32 h-32' src={getImageProf(ProfileData.attach)?.path ?? CNN_p.src} /></div>
          <div>
            <button onClick={() => setOpenUpgrade(true)} style={{ backgroundColor:ProfileData?.rank?.color??"white" }} className='bg-[var(--lightBlue)] p-2 rounded-2xl'><img src={Medal.src} alt="medal" /></button>
          </div>
        </div> :
        <div className="flex justify-center flex-row items-center gap-x-2"  >

          <div><img className='rounded-[50%] w-32 h-32' src={data?.attach.length>0?getImageProf(data.attach)?.path:CNN_p.src} /></div>

        </div>}
      <div className="flex justify-center mt-5"><p className="text-2xl font-bold">{haveAction ? ProfileData.name : data.name }</p></div>
      <div className="flex mt-5">
        <p className="text-sm text-[var(--gray)]">{haveAction ? ProfileData.about : data.about } </p>
      </div>

      {openProfile && <ProfileBusinessDrawer changeOpen={(value: boolean) => setOpenProfile(value)} isOpen={openProfile} />}
      {openUpgrade && <UpgradeDrawer changeOpen={(value: boolean) => setOpenUpgrade(value)} isOpen={openUpgrade} />}

    </>
  )
}
