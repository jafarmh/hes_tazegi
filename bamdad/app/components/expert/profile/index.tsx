'use client'

import React, { useState } from 'react'

import Call from '@/asset/img/call.svg';
import { ExpertProps } from '@/app/interface/Entity';
import Link from '@/asset/img/link.svg';
import Sms from '@/asset/img/sms.svg';
import User from '@/asset/img/RectangleUser.png';
import { getImageProf } from '@/utility/Function';

export default function ProfileExpert({data}:{data:ExpertProps}) {


    return (
        <>
            <div className="flex flex-col ">

                <div className="flex justify-center flex-row items-center gap-x-2 border-blue-500"  >
                    
                    <div><img src={data.attach.length>0?getImageProf(data.attach)?.path:User.src} className='rounded-[50%] bg-gradient-to-r p-1 from-[var(--blueColor)] via-[var(--blueColor)] to-[var(--blue)]' /></div>
                  
                     
                </div>
                <div className="flex justify-center mt-5"><p className="text-2xl font-bold">{data.name}</p></div>
                <div className="flex mt-10">
                    <p className="text-sm text-[var(--gray)] leading-7"> 
                     {data.about}
                    </p>
                </div>
            
            
                <div className="flex flex-col gap-y-6 mt-10  items-end">
                    <div className='flex flex-row gap-x-2 ' >
                        <div dir='ltr'><p className="text-sm text-[var(--gray)] font-bold">{data.mobile}</p></div>
                        <div><img src={Call.src} alt="call" /></div>
                    </div>
                    <div className='flex flex-row gap-x-2' >
                        <div><p className="text-sm text-[var(--gray)] font-bold">{data.email}</p></div>
                        <div><img src={Sms.src} alt="sms" /></div>
                    </div>
                    <div className='flex flex-row gap-x-2' >
                        <div><p className="text-sm text-[var(--gray)] font-bold">{data.webLink}</p></div>
                        <div><img src={Link.src} alt="call" /></div>
                    </div>
                </div>
            </div>

         </>
    )
}
