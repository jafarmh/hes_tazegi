'use client'

import React, { useState } from 'react'

import ConfirmRejectDialog from '../elements/AgreeDialog';
import Link from 'next/link';
import empty from '@/asset/img/empty.jpg';
import { getImageProf } from '@/utility/Function'
import { serviceBamdadProps } from '@/app/interface/Entity'
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

type Props = {
    services: serviceBamdadProps[]
}


export default function Services({ services }: Props) {
    const [openConfirm, setOpenConfirm] = useState(false);
    const [href, setHref] = useState("")
    const router = useRouter();
    const { t } = useTranslation();

    const confirms = () => {
        if (href !== '')
            window.open(href, "_blank");
        //router.push(href)
    }

    return (
        <>
            <div className="flex flex-row justify-center  flex-wrap gap-y-8 gap-x-4  mt-10 mb-24">
                <div className='text-right w-full'><b className='text-[var(--black)]' >{t("bamdadService")}</b></div>

                {
                    services.map((item) => (

                        <div
                            onClick={() => { setHref(item.link); setOpenConfirm(true) }}
                            className="text-[var(--black)] rounded-2xl max-[450px]:w-[150px] w-[210px]" key={item.id}>
                            <img className=" object-cover rounded-2xl	max-[450px]:w-[140px] w-[190px] h-28" src={getImageProf(item.attach)?.path ?? empty.src} alt={item.title} />
                            <div className="p-1    cursor-pointer  rounded-2xl w-[90%]  flex flex-col gap-y-1 ">
                                <span className='text-[var(--black)] text-xs font-bold'>{item.title}</span>
                                <span className='text-[var(--black)] text-xs'>{item.description} </span>
                            </div>

                        </div>

                    ))
                }
            </div>

            <ConfirmRejectDialog
                body={<></>}
                id='Confirms'
                open={openConfirm}
                confirmFunction={() => { confirms(); setOpenConfirm(false) }}
                confirmTitle={t("yes")}
                rejectTitle={t("no")}
                loading={false}
                rejectFunction={() => setOpenConfirm(false)}
                title={t("redirectService")}

            />
        </>
    )
}