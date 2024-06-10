'use client'

import { ExportSolutionProps } from '@/app/interface/Entity';
import GroupProf from '@/asset/img/GroupProf.png';
import Link from 'next/link';
import React from 'react'
import RectangleUser from '@/asset/img/RectangleUser.png';
import Star from '../elements/Star';
import { useTranslation } from 'react-i18next';

export default function DetailNews({ data }: { data: ExportSolutionProps }) {
    const {t}=useTranslation();
  
    let image1 = data.attach.length > 0 ? data.attach[0].path : "";
    return (
        <div className=" p-2 flex flex-col mb-5 " >
            <div className='mb-3'>
                <h1 className="text-[var(--black)]  font-bold">
                    {data.title ?? ''}
                </h1>
                <p className='text-[var(--gray)] text-xs mt-2'>
                    {data.country?.name!==''?data.country?.name:data.country?.name_en} | {data.category?.name}
                </p>
            </div>

            <div className=" flex-none">
                {image1 && <img className="h-auto w-[100%] rounded-2xl " src={image1} alt="rect3" />}
            </div>

            <div className="mt-1">
                <p className="text-[var(--gray)] text-sm">
                    {data.description ?? ""}
                </p>
            </div>

            {/* <div className="mt-5 flex-none relative">
                <img className="h-auto w-[100%]" src={Rectangle6.src} alt="rect3" />
                <div className="absolute   top-[20%] right-[40%] ">
                    <img className="h-auto w-20" src={Success.src} alt="rect3" />
                </div>
            </div> */}
            {/*             
            <div className='mb-3'>
                <p className="text-[var(--black)] text-sm font-bold mt-3">
                    برترین ها: مانه می خواهد از آنفیلد برود
                </p>
            </div> */}
            {/* <div className="mt-1">
                <p className="text-[var(--gray)] text-sm">
                    به گفته فابریزیو رومانو، سادیو مانه، مهاجم لیورپول تصمیم به ترک آنفیلد گرفته است.
                </p>
                <p className="text-[var(--gray)] text-sm">
                    مانه که در سال 2016 به لیورپول پیوست و بیش از 120 گل برای این تیم به ثمر رساند.
                </p>
            </div> */}

            <div className="flex-grow flex flex-row gap-x-2 mt-5">
                {data.attach.map((item) => (
                    <div><img className="max-[450px]:w-72 w-64 h-28 object-cover rounded-2xl" src={item.path} alt="" /></div>

                ))}


            </div>

            <div className=" p-2 flex flex-col mb-20 " >

                <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
                    <div className="flex flex-row p-3 items-center gap-x-4">
                        <div className="flex-none w-20">
                            <img className="w-full rounded-lg" src={data.expert?.attach.length > 0 ? data.expert.attach[0].path : RectangleUser.src} />
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
                <div className='flex flex-row p-3 items-center gap-x-4'>
                    <h1><b className='text-[var(--black)]' >{t("comments")}</b></h1>
                </div>
                {data.comment.map((item)=>(
                    <div className="flex flex-row p-3 items-center gap-x-4">
                        <div className="flex-none w-20">
                            <img className="w-20 h-20 object-cover rounded-lg" src={item.user?.attach.length > 0 ? item.user.attach[0].path : GroupProf.src} />
                        </div>

                        <div className="flex-grow flex flex-col gap-y-2">
                            <div className="">
                                <p ><Star rate={item.rate} /></p>
                                <p className="font-bold">{item.user?.name}</p>
                                </div>
                            <div className="text-[var(--gray)] text-sm">
                                <p>{item.text}</p>
                            </div>
                           
                        </div>
                    </div>
               
                ))}

            </div>
        </div>
    )
}
