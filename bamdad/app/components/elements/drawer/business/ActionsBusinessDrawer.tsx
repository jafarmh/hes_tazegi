import React, { useState } from 'react'

import ConfirmRejectDialog from '../../AgreeDialog'
import DrawerBottom from '..'
import EditBlue from '@/asset/img/editBlue.svg'
import { RWebShare } from 'react-web-share'
import Share from '@/asset/img/share.svg'
import Trash from '@/asset/img/trash.svg'
import useRtlLtr from '@/app/hooks/RtlLtr'
import { useTranslation } from 'react-i18next'

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
    EditAction: Function,
    RemoveAction: Function,
    data: any
}
export default function ActionsBusinessDrawer(props: Props) {
    const {t}=useTranslation();
    const { isOpen, changeOpen, RemoveAction, EditAction, data } = props
    const [openRemove, setOpenRemove] = useState(false);
    const [selectData, setSelectData] = useState<any>()
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={isOpen} changeOpen={changeOpen} height='230px' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-10 px-4 mt-5" dir={dir}>
                    <div onClick={() => EditAction(data)} className="flex flex-row gap-x-2">
                        <div><img src={EditBlue.src} alt="warning" /></div>
                        <div><span className="text-[var(--gray)]">{t("editInfo")}</span></div>
                    </div>
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
                    <div onClick={() => { setSelectData(data); setOpenRemove(true) }} className="flex flex-row gap-x-2">
                        <div><img src={Trash.src} alt="share" /></div>
                        <div><span className="text-[var(--gray)]">{t("remove")} </span></div>
                    </div>
                </div>

            </DrawerBottom>
            <ConfirmRejectDialog
                body={<></>}
                id='removes'
                open={openRemove}
                confirmFunction={()=>{RemoveAction(selectData);setOpenRemove(false)}}
                confirmTitle={t("remove")}
                rejectTitle={t("no")}
                loading={false}
                rejectFunction={() => setOpenRemove(false)}
                title={t("confirmRemove")}

            />
        </>
    )
}
