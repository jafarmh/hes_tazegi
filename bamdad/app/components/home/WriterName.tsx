'use client';

import { ExpertProps } from '@/app/interface/Entity';
import React from 'react'

export default function WriterName({ data }: { data: ExpertProps }) {
 
    return (
        <>
            {data && <div className='flex flex-row text-xs gap-x-4 w-full align-baseline '>
                <div><p className='text-[var(--blueColor)] '>{data.name ?? "نام نویسنده"}</p></div>
                <div className='flex flex-row gap-x-2'>
                    {/*<img className='w-[5px]' src={Ellipse10.src}></img>
                     <span className='text-[var(--gray)]'>32 دقیقه پیش</span> */}
                </div>

            </div>
            }
        </>
    )
}
