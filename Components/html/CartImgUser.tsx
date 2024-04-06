'use client';

import { CartImgUserProps } from '@/interface/Element'
import React from 'react'
import Save from '@/asset/icon/save.svg'
import { useRouter } from 'next/navigation';

export default function CartImgUser({ img, title, description, avatar, name, date }: CartImgUserProps) {
    const router=useRouter(); 
    return (
        <div onClick={()=>router.push("/detail")} className='shadow-[0px_0px_32px_0px_#00000012] p-[10px] rounded-[--radius] flex flex-col gap-2 bg-white w-[340px] cursor-pointer'>
            <img src={img} alt="Support" className='rounded-[--radius]' />
            <h5 className='text-[--gray] font-[500] text-[16px]'>
                {title.substring(0,40)} 
            </h5>
            <small>
                {description.substring(0, 100)}...
            </small>
            <div className='bg-[--grayLight] rounded-[--radius] py-[13px] px-[16px] flex flex-row justify-between gap-x-2'>
                <img src={avatar} alt='Avatar' className='w-[44px] h-[44px] rounded-[--radius]' />
                <div className='flex flex-col gap-2 flex-grow'>
                    <b>{name}</b>
                    <small>{date}</small>

                </div>
                <img src={Save.src} alt="Save" />
            </div>
        </div>
    )
}
