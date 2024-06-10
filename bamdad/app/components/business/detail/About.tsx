'use client'

import React, { useState } from 'react'

import Call from '@/asset/img/call.svg';
import Link from 'next/link';
import Links from '@/asset/img/link.svg';
import { RootState } from '@/app/redux/Store';
import ShareBusinessDrawer from '@/app/components/elements/drawer/business/ShareBusinessDrawer'
import ShowAttach from '../../elements/Show/ShowAttach';
import Sms from '@/asset/img/sms.svg';
import { UsersDataProps } from '@/app/interface/Entity';
import instagram from '@/asset/img/instagram.png';
import telegram from '@/asset/img/telegram.png';
import { txtLorm } from '@/utility/Config';
import { useSelector } from 'react-redux';

export default function About({ haveAction, data }: { haveAction: boolean, data: UsersDataProps }) {
    const [openShare, setOpenShare] = useState(false);
    const ProfileData = useSelector((state: RootState) => state.profile);

    return (
        <>
            <div style={{ minHeight:'calc(100vh - 250px)' }} className="  max-h-screen overflow-y-auto">
                <div className="flex mt-5" onClick={() => setOpenShare(true)}>
                    <p className="text-sm text-[var(--gray)]">{haveAction ? ProfileData.resume : data.resume}</p>
                </div>
                <div className="flex flex-col gap-y-6 mt-4  items-end  ">
                    <div className='flex flex-row gap-x-2 ' >
                        <div dir='ltr'>
                            <Link href={`tel:${haveAction ? ProfileData.mobile ?? "" : data.mobile ?? ""}`}
                                className="text-sm text-[var(--gray)] font-bold">
                                {haveAction ? ProfileData.mobile : data.mobile}
                            </Link>
                        </div>
                        <div><img src={Call.src} alt="call" /></div>
                    </div>
                    <div className='flex flex-row gap-x-2'  >
                        <div><p className="text-sm text-[var(--gray)] font-bold">{haveAction ? ProfileData.email : data.email}</p></div>
                        <div><img src={Sms.src} alt="sms" /></div>
                    </div>
                    <div className='flex flex-row gap-x-2'  >
                        <div><Link target='_blank' href={haveAction ? ProfileData.webLink ?? "" : data.webLink ?? ""} className="text-sm text-[var(--gray)] font-bold">...{haveAction ? ProfileData.webLink?.substring(0,20) : data.webLink?.substring(0,20)}</Link></div>
                        <div><img src={Links.src} alt="call" /></div>
                    </div>

                    <div className='flex flex-row gap-x-2' >
                        <div><p className="text-sm text-[var(--gray)] font-bold">{haveAction ? ProfileData.instagram : data.instagram}</p></div>
                        <div><img src={instagram.src} alt="call" /></div>
                    </div>

                    <div className='flex flex-row gap-x-2' >
                        <div><p className="text-sm text-[var(--gray)] font-bold">{haveAction ? ProfileData.telegram : data.telegram}</p></div>
                        <div><img src={telegram.src} alt="call" /></div>
                    </div>
                    
                    <ShowAttach showImg={false} attach={ProfileData.attach} />
                  
                </div>
            </div>
            {openShare && <ShareBusinessDrawer reportId='' changeOpen={(value: boolean) => setOpenShare(value)} isOpen={openShare} />}

        </>
    )
}
