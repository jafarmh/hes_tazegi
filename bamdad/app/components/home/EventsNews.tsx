
'use client'

import React, { useEffect, useState } from 'react'

import LineBlue from "../elements/line/LineBlue";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function EventsNews({ News, Events,Media,Meg }: { News: any, Events: any, Media: any, Meg: any }) {
    const [isLoad,setIsLoad]=useState(false);
    const [activeItem, setActiveItem] = useState("news")

    const {t}=useTranslation();

    useEffect(()=>{
        setIsLoad(true)
    },[])

    return (
        <>
            {
                /* <div className="  mt-1 flex flex-warp ">
                    <div><img className="w-52" src={USA.src} alt="Fox" /></div>
                    <div><img className="w-52" src={FOX.src} alt="Fox" /></div>
                    <div><img className="w-52" src={CNBC.src} alt="Fox" /></div>
                    <div><img className="w-52" src={MSN.src} alt="Fox" /></div>
                    <div><img className="w-52" src={BBC.src} alt="Fox" /></div>
                    <div><img className="w-52" src={CNN.src} alt="Fox" /></div>
    
                </div> */
            }

            {isLoad&&<>
            <div className="  w-full mt-5">
                <h1 className={`text-[var(--black)] font-bold  text-sm`}> {t("browserNews")}</h1>
                <div className="flex flex-row gap-x-4 h-14 mt-10 align-baseline">

                    <div onClick={() => setActiveItem("news")} className="flex flex-col gap-y-2 cursor-pointer">
                        <div className={`${activeItem === 'news' ? "text-sm text-[var(--gray)]" : "text-[.7rem] text-[var(--gray)]"} `}>{t("allNews")}</div>
                        {activeItem === 'news' && <div><LineBlue /></div>}
                    </div>
                    <div onClick={() => { setActiveItem("event") }} className="flex flex-col gap-y-2 cursor-pointer">
                        <div className={`${activeItem === 'event' ? "text-sm text-[var(--gray)]" : "text-[.7rem] text-[var(--gray)]"} `}>{t("event")}</div>
                        {activeItem === 'event' && <div><LineBlue /></div>}
                    </div>
                    <div onClick={() => { setActiveItem("meg") }} className="flex flex-col gap-y-2 cursor-pointer">
                        <div className={`${activeItem === 'meg' ? "text-sm text-[var(--gray)]" : "text-[.7rem] text-[var(--gray)]"} `}>{t("meg")}</div>
                        {activeItem === 'meg' && <div><LineBlue /></div>}
                    </div>
                    <div onClick={() => { setActiveItem("media") }} className="flex flex-col gap-y-2 cursor-pointer">
                        <div className={`${activeItem === 'media' ? "text-sm text-[var(--gray)]" : "text-[.7rem] text-[var(--gray)]"} `}>{t("media")}</div>
                        {activeItem === 'media' && <div><LineBlue /></div>}
                    </div>
                </div>
            </div>

            {activeItem === 'news' && <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
                {News.map((item: any,index:number) => (
                    <div key={`news_${index}`}>
                        <Link href={item.link} >
                        <div className="flex flex-row p-3 items-center gap-x-4">
                        {item.better_featured_image?.media_details.sizes.thumbnail.source_url && <div className="flex-grow w-80">
                            <img className="w-full rounded-xl" src={item.better_featured_image?.media_details.sizes.thumbnail.source_url} />
                        </div>}
                        <div className=" flex flex-col gap-y-2">
                        
                            <div className=""><p className="font-bold" dangerouslySetInnerHTML={{ __html: item.title.rendered }} /> </div>
                            <div className="text-[var(--gray)] text-sm"><p className="font-bold" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} /></div>
                        </div>
                    </div>
                    </Link>
                    </div>
                ))}
            </div>}


            {activeItem === 'event' && <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
                {Events.map((item: any,index:number) => (
                   <div key={`event_${index}`}> <Link href={item.link} >
                        <div className="flex flex-row p-3 items-center gap-x-4">
                            {item.better_featured_image?.media_details.sizes.thumbnail.source_url &&
                                <div className="flex-grow w-80">
                                    <img className="w-full rounded-xl" src={item.better_featured_image?.media_details.sizes.thumbnail.source_url} />
                                </div>
                            }
                            <div className=" flex flex-col gap-y-2">
                                <div className=""><p className="font-bold" dangerouslySetInnerHTML={{ __html: item.title.rendered }} /></div>
                                <div className="text-[var(--gray)] text-sm"><p className="font-bold" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} /></div>
                            </div>
                        </div>
                    </Link></div>))}
            </div>}

            {activeItem === 'meg' && <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
                {Meg.map((item: any,index:number) => (
                    <div key={`meg_${index}`}>
                        <div className="flex flex-row p-3 items-center gap-x-4">
                            {item.better_featured_image?.media_details.sizes.thumbnail.source_url &&
                                <div className="flex-grow w-80">
                                    <img className="w-full rounded-xl" src={item.better_featured_image?.media_details.sizes.thumbnail.source_url} />
                                </div>
                            }
                            <div className=" flex flex-col gap-y-2">
                                <div className=""><p className="font-bold" dangerouslySetInnerHTML={{ __html: item.title.rendered }} /></div>
                                <div className="text-[var(--gray)] text-sm"><p className="font-bold" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} /></div>
                            </div>
                        </div>
                   </div>))}
            </div>}

            
            {activeItem === 'media' && <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
                {Media.map((item: any,index:number) => (
                    <div key={`media_${index}`}>
                        <Link href={item.link} >
                        <div className="flex flex-row p-3 items-center gap-x-4">
                            {item.better_featured_image?.media_details.sizes.thumbnail.source_url &&
                                <div className="flex-grow w-80">
                                    <img className="w-full rounded-xl" src={item.better_featured_image?.media_details.sizes.thumbnail.source_url} />
                                </div>
                            }
                            <div className=" flex flex-col gap-y-2">
                                <div className=""><p className="font-bold" dangerouslySetInnerHTML={{ __html: item.title.rendered }} /></div>
                                <div className="text-[var(--gray)] text-sm"><p className="font-bold" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} /></div>
                            </div>
                        </div>
                    </Link></div>))}
            </div>}
        </>
        }
        </>
    )
}
