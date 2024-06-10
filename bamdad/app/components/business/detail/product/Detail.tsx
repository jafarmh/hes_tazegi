'use client'

import Hashtags from '@/app/components/elements/search/Hashtags';
import { ProductData } from '@/app/interface/Entity';
import React from 'react'
import Rectangle6 from '@/asset/img/empty.jpg';
import ShowAttach from '@/app/components/elements/Show/ShowAttach';
import { getImageProf } from '@/utility/Function';
import { useTranslation } from 'react-i18next';

export default function Detail({data}:{data:ProductData}) {
    let price=+ data.price
    const {t}=useTranslation();
    return (
        <>

            <div className="flex flex-col gap-y-4">
                <div><img className='w-full rounded-2xl' src={getImageProf(data.attach)?.path??Rectangle6.src} alt="rect3" /></div>
                <div className='flex flex-row w-full px-2'>
                    <div className='grow'><p className="text-[var(--gray)]">{data.title}</p></div>
                    <div className='flex-none flex flex-row text-sm'>
                        <div><b className="text-[var(--gray)]">{price.toLocaleString()}</b></div>
                        <div className="rotate-180  text-[var(--gray)]" style={{ writingMode: 'vertical-rl' }} >
                            {t("tooman")}
                        </div>
                    </div>

                </div>
                <div className='grow px-2'>
                    <p className="text-[var(--gray)] text-sm">
                        {data.description}
                    </p>
                </div>

            </div>
           
           
            <div className="flex flex-row flex-wrap gap-4 my-4">
                {data.tags?.map((item)=>(<Hashtags text={item.name} />))}
            
            
            </div>

            <div className="flex flex-row flex-wrap gap-4 my-4">
                <ShowAttach attach={data.attach}/>
            </div>
        </>
    )
}
