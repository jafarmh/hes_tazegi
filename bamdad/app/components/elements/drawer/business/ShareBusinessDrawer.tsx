'use client'

import React, { useState } from 'react'

import DrawerBottom from '..'
import Heart from '@/asset/img/heart.svg'
import { RWebShare } from 'react-web-share'
import ReportBusinessDrawer from './ReportBusinessDrawer'
import Share from '@/asset/img/share.svg'
import Warning from '@/asset/img/warning-2.svg'
import { useRouter } from 'next/navigation'
import useRtlLtr from '@/app/hooks/RtlLtr'
import { useTranslation } from 'react-i18next'

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    reportId: string,
    window?: () => Window;
}
export default function ShareBusinessDrawer(props: Props) {
    const {t}=useTranslation();

    const { isOpen, changeOpen, reportId } = props
    const [openReport, setOpenReport] = useState(false);

    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={isOpen} changeOpen={changeOpen} height='70px'>
                <div className="flex flex-col gap-y-10 px-4 mt-5" dir={dir}>
                    {reportId !== '' &&
                        <div onClick={() => setOpenReport(true)} className="flex flex-row gap-x-2">
                            <div><img src={Warning.src} alt="warning" /></div>
                            <div><span className="text-[var(--gray)]">{t("reportR")} </span></div>
                        </div>}
                    <div className="flex flex-row gap-x-2">
                        <RWebShare
                            data={{
                                text: "",
                                url: window.location.href,
                                title: "",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <button className="flex flex-row gap-x-2">
                                <div><img src={Share.src} alt="share" /></div>
                                <div><span className="text-[var(--gray)]">{t("share")}</span></div>
                            </button>
                        </RWebShare>

                    </div>
                    {/* <div className="flex flex-row gap-x-2">
                        <div><img src={Heart.src} alt="heart" /></div>
                        <div><span className="text-[var(--gray)]">افزودن به علاقه مندی‌ها</span></div>
                    </div> */}
                </div>

            </DrawerBottom>

            {openReport && <ReportBusinessDrawer reported_id={reportId} changeOpen={(value: boolean) => setOpenReport(value)} isOpen={openReport} />}

        </>
    )
}
