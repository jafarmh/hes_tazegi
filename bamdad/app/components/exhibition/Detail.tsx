'use client'

import { ExhibitionProps } from '@/app/interface/Entity';
import Link from 'next/link';
import React from 'react'
import RectangleUser from '@/asset/img/RectangleUser.png';
import moment from "jalali-moment";
import { useTranslation } from 'react-i18next';

export default function DetailExhibition({ data }: { data: ExhibitionProps }) {
    const {t}=useTranslation();
    let image1 = data.attach.length > 0 ? data.attach[0].path : "";
    let start=(data.start_at);
    let end=(data.end_at);
    return (
        <div className=" p-2 flex flex-col mb-5 " >
            <div className='mb-3'>
                <h1 className="text-[var(--black)]  font-bold">
                    {data.title ?? ''}
                </h1>
              
            </div>

            <div className=" flex-none">
                {image1 && <img className="h-auto w-[100%] rounded-2xl " src={image1} alt="rect3" />}
            </div>

            <div className="mt-1">
                <p className="text-[var(--gray)] text-sm">
                    {data.description ?? ""}
                </p>
            </div>
            <div className="mt-1">
            <p className='text-[var(--gray)] text-sm mt-2'>
                    {t("start")}:<b className='text-[var(--black)]' >{ moment(start, 'YYYY/MM/DD').locale('fa').format('DD-M-YYYY')}</b>  {t("end")}: <b className='text-[var(--black)]' >{moment(end, 'YYYY/MM/DD').locale('fa').format('DD-M-YYYY')}</b>
                </p>
            </div>

            <div className="flex-grow flex flex-row gap-x-2 mt-5">
                {data.attach.map((item) => (
                    <div><img className="max-[450px]:w-72 w-64 h-28 object-cover rounded-2xl" src={item.path} alt="" /></div>
                ))}


            </div>

            <div className=" p-2 flex flex-col mb-20 " >

                <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
                    <div className="flex flex-row p-3 items-center gap-x-4">
                        <div className="flex-none w-20">
                            <img className="w-full" src={data.expert?.attach.length > 0 ? data.expert.attach[0].path : RectangleUser.src} />
                        </div>

                        <div className="flex-grow flex flex-col gap-y-2">
                            <div className=""><p className="font-bold">{data.expert?.name}</p></div>
                            <div className="text-[var(--gray)] text-sm">
                                <p>{data.expert?.about.substring(0, 50)}...</p>
                            </div>
                            <Link href={"/expert/" + data.expert?.id}><div className="">
                                <sub className={`text-[var(--blue)] text-[12px]`}> <span>{t("readMore")}</span> </sub >
                                <sub className={`text-[var(--blue)] text-[16px]`}> &#8592;</sub >
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
           

            </div>
        </div>
    )
}
