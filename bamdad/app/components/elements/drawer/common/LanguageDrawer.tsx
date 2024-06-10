'use client'

import React, { useState } from 'react'

import DrawerBottom from '..'
import EditBlue from '@/asset/img/editBlue.svg'
import LngItems from '@/app/components/common/LngItems'
import Share from '@/asset/img/share.svg'
import Trash from '@/asset/img/trash.svg'
import useRtlLtr from '@/app/hooks/RtlLtr'
import { useTranslation } from 'react-i18next'

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function LanguageDrawer(props: Props) {

    const { t } = useTranslation();
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const dir=useRtlLtr()

    return (
        <>


            <DrawerBottom isOpen={openM} changeOpen={change} height='220px' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-[16px] mb-4 px-4 mt-2 text-center" dir={dir}>
                    <LngItems click={() => change(false)} />
                </div>

            </DrawerBottom>



        </>
    )
}
