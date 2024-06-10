'use client'

import React, { useEffect, useState } from 'react'
import { emptyDataExhibitionProps, setDataExhibitionProps } from '@/app/redux/reducer/general/Exhibition';
import { useDispatch, useSelector } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import { ExhibitionPageProps } from '@/app/interface/Entity';
import { GetExhibitionListPage } from '@/app/redux/ApiCall/Exhibition';
import Link from 'next/link';
import MoreBtn from '../business/MoreBtn';
import RecNew from '../../../asset/img/empty.jpg'
import RecNew1 from '../../../asset/img/Rectangle_new_1.png'
import Rectangle6 from '../../../asset/img/Rectangle6.png'
import { RootState } from '@/app/redux/Store';
import Star from '../../../asset/img/star.png'
import TabsBlueLine from '../elements/tabs/TabsBlueLine';
import WriterName from '../home/WriterName'
import { getImageProf } from '@/utility/Function';
import { useTranslation } from 'react-i18next';

export default function Exhibition({ data, current_page, to, total }: ExhibitionPageProps) {
    const {t}=useTranslation();
    const [page, setPage] = useState(+current_page ?? 1);
    const [haveMore, setHaveMore] = useState(false);
    const [length, setLength] = useState(to ?? 0);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const MyData = useSelector((state: RootState) => state.ExhibitionData);

    const GetData = (pageNumber: number = page) => {
        setDisabled(true)
        setLoading(true)

        GetExhibitionListPage(pageNumber.toString(), (res: any) => {
            setDisabled(false)
            setLoading(false)
            if (res) {
                dispatch(setDataExhibitionProps(res.data));
                setPage(+res.current_page);
                setLength(res.to);
                if ((+res.total) - (res.to) > 0) {
                    setHaveMore(true);
                } else {
                    setHaveMore(false);
                }
            }
        })
    }
    useEffect(() => {
        dispatch(emptyDataExhibitionProps());
        dispatch(setDataExhibitionProps(data));

    }, [])

    useEffect(() => {
        if (total !== undefined && to !== undefined) {
            if (((+total) - (+to)) > 0) {
                setHaveMore(true);
                setPage((+page))
            } else {
                setHaveMore(false);
            }
        }

    }, [])


    return (
        <>
         <TabsBlueLine items={[
                    { active: false, link: "/home", title: t("allNews") },
                    { active: false, link: "/exportSolution", title: t("exportSolution")},
                    { active: true, link: "#", title: t("allExhibition")},
                    { active: false, link: "/business", title:t("accounts") },
                ]} />
            {/* <div className="text-sm bg-[var(--lightOrang)] rounded-lg p-2 my-5 flex flex-col gap-y-4 items-center">
                <div><b >نمایشگاه خود را ثبت کنید</b></div>
                <div><p className="text-[var(--gray)]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p></div>
                <div className="text-[var(--orang)]">
                    <span><AddIcon /></span>
                    <span>ایجاد نمایشگاه</span>
                </div>
            </div> */}
            {MyData && MyData.length > 0 ? MyData.map((item) => (
                <Link href={"/exhibition/" + item.id}>
                    <div className=" p-2 flex flex-col mb-5 " >
                        <div className=" w-full    flex-none relative">
                            <img className="h-36 w-[100%] object-cover rounded-2xl" src={ getImageProf(item.attach)?.path ?? RecNew.src} alt="rect3" />
                            <div className="absolute bottom-2 left-2 ">
                                {item.status === 1 && <div className="bg-gradient-to-r from-[var(--blueColor)] to-[var(--blue)] flex flex-row gap-x-2 items-center px-2 rounded-2xl">
                                    <div><img src={Star.src} /></div>
                                    <div><span className='text-white text-xs'>{t("induing")}</span></div>

                                </div>}
                            </div>
                        </div>

                        <div className='mb-3'>
                            <p className="text-[var(--black)] text-sm  mt-3">
                                <b className='text-[var(--black)]' >{item.title  }</b>: {item.description.substring(0, 50)}...
                            </p>
                        </div>
                        <WriterName data={item.expert} />

                    </div>
                </Link>
            )) : <>





                <div className=" p-2 flex flex-col mb-5 " >
                    <div className=" flex-none relative">
                        <img className="h-auto w-[100%]" src={RecNew1.src} alt="rect3" />
                        <div className="absolute bottom-2 left-2 ">
                            <div className="bg-gradient-to-r from-[var(--blueColor)] to-[var(--blue)] flex flex-row gap-x-2 items-center px-2 rounded-2xl">
                                <div><img src={Star.src} /></div>
                                <div><span className='text-white text-xs'>{t("induing")}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <p className="text-[var(--black)] text-sm font-bold mt-3">
                            تغییرات آب و هوا: گرم شدن قطب شمال با مرتبط است
                        </p>
                    </div>
                    <WriterName data={{ about: "", email: "", id: "", mobile: "", name: "", webLink: "", attach: [] }} />

                </div>

                <div className=" p-2 flex flex-col mb-20 " >
                    <div className=" flex-none relative">
                        <img className="h-auto w-[100%]" src={Rectangle6.src} alt="rect3" />
                        <div className="absolute bottom-2 left-2 ">
                            <div className="bg-gradient-to-r from-[var(--blueColor)] to-[var(--blue)] flex flex-row gap-x-2 items-center px-2 rounded-2xl">
                                <div><img src={Star.src} /></div>
                                <div><span className='text-white text-xs'>درحال اجرا</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <p className="text-[var(--black)] text-sm font-bold mt-3">
                            تغییرات آب و هوا: گرم شدن قطب شمال با مرتبط است
                        </p>
                    </div>
                    <WriterName data={{ about: "", email: "", id: "", mobile: "", name: "", webLink: "", attach: [] }} />

                </div>
            </>}


            <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">

                <MoreBtn
                    click={() => { setPage(page + 1); GetData(page + 1) }}
                    disabled={disabled}
                    loading={loading}
                    haveMore={haveMore}
                />
            </div>
        </>
    )
}
