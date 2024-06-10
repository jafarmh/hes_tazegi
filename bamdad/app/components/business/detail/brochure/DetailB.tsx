'use client'

import { BrochureData, ExportSolutionProps, UsersDataProps } from '@/app/interface/Entity';

import GroupProf from '@/asset/img/GroupProf.png';
import IconsLine from '@/app/components/exportSolution/IconsLine';
import Link from 'next/link';
import React from 'react'
import Rectangle3_0 from '@/asset/img/Rectangle3-0.png';
import Rectangle4 from '@/asset/img/Rectangle4.png'
import Rectangle5 from '@/asset/img/Rectangle5.png'
import Rectangle6 from '@/asset/img/Rectangle6.png';
import RectangleUser from '@/asset/img/RectangleUser.png';
import ShowAttach from '@/app/components/elements/Show/ShowAttach';
import Success from '@/asset/img/Success.png'

export default function DetailB({ data,userDatas }: { data: BrochureData,userDatas:UsersDataProps }) {

  
    return (
        <div className=" p-2 flex flex-col mb-5 " >
            <div className='mb-3'>
                <h1 className="text-[var(--black)]  font-bold">
                    {data.title ?? ''}
                </h1>
                
            </div>

            <div className="mt-1">
                <p className="text-[var(--gray)] text-sm">
                    {data.description ?? ""}
                </p>
            </div>

          

            <div className="flex-grow flex flex-row gap-x-2 mt-5">
                <ShowAttach attach={data.attach}/>

            </div>

            
        </div>
    )
}
