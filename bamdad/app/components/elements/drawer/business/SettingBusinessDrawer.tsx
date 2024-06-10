import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';

import ArrowSquare from '@/asset/img/arrow-square-left.png'
import Back from '@/asset/img/back.svg'
import ConfirmRejectDialog from '../../AgreeDialog';
import Delete from '@/asset/img/trash.svg';
import DrawerBottom from '..'
import Info from '@/asset/img/info-circle.png'
import LanguageDrawer from '../common/LanguageDrawer'
import Link from 'next/link';
import Logout from '@/asset/img/logout-red.png'
import LogoutBusinessDrawer from './LogoutBusinessDrawer'
import Mony from '@/asset/img/money-2.svg'
import Notification from '@/asset/img/notification.png'
import NotificationBusinessDrawer from './NotificationBusinessDrawer'
import { RootState } from '@/app/redux/Store';
import SupportBusinessDrawer from './SupportBusinessDrawer'
import SwitchE from '../../switch/Switch';
import Translate from '@/asset/img/translate.png'
import moon from '@/asset/img/moon.png'
import { removeMyAccount } from '@/app/redux/ApiCall/User';
import useRtlLtr from '@/app/hooks/RtlLtr'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function SettingBusinessDrawer(props: Props) {
    const { t } = useTranslation();
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [openSupport, setOpenSupport] = useState(false);
    const [openLogout, setOpenLogout] = useState(false);
    const [openNot, setOpenNot] = useState(false);
    const [openLng, setOpenLng] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);
    const Route = useRouter();
    const siteInfo = useSelector((state: RootState) => state.SiteInfoReducer);
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const dir = useRtlLtr();
    const pathname = usePathname()
    const RemoveF = () => {
        removeMyAccount((res: any) => {
            if (res) {
                window.localStorage.removeItem("0VbQvSw1sB");
                Route.push("/")
            }

        })
    }

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='420px' backgroundColor='transparent' >
                <div className="flex flex-col px-1 mt-5" dir={dir}>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]'>{t("setting")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>

                    <div className="p-2 mt-2 flex flex-col gap-y-8 text-xs">
                        <div onClick={() => { setOpenNot(true) }} className="flex flex-row items-center gap-x-2">
                            <div className=''><img src={Notification.src} alt="notification" /></div>
                            <div className='flex-grow'><b className='text-[var(--black)]'>{t("notifications")}</b></div>
                            <div className='flex-none'><img src={ArrowSquare.src} alt="ArrowSquare" /></div>
                        </div>

                        <div onClick={() => { setOpenSupport(true) }} className="flex flex-row items-center gap-x-2">
                            <div className=''><img src={Info.src} alt="notification" /></div>
                            <div className='flex-grow'><b className='text-[var(--black)]'>{t("support")}</b></div>
                            <div   className='flex-none'><img src={ArrowSquare.src} alt="ArrowSquare" /></div>
                        </div>

                        <div onClick={() => setOpenLng(true)} className="flex flex-row items-center gap-x-2">
                            <div className=''><img src={Translate.src} alt="notification" /></div>
                            <div className='flex-grow'><b className='text-[var(--black)]'>{t("language")}</b></div>
                            <div  className='flex-none flex flex-row gap-1 items-center'>
                                <span className='text-[var(--blueColor)]'>
                                    {window.localStorage.getItem("lng") === "fa" ?
                                        "فارسی" : window.localStorage.getItem("lng") === "en" ? "English" : "عربی"}
                                </span>
                                <img src={ArrowSquare.src} alt="ArrowSquare" />
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-x-2">
                            <div className=''><img className='w-[24px] h-[24px]' src={moon.src} alt="notification" /></div>
                            <div className='flex-grow'><b className='text-[var(--black)]'>{t("darkLight")}</b></div>
                            <div className='flex-none flex flex-row gap-1 items-center'>

                                <SwitchE
                                    checked={window.localStorage.getItem("night") === 'true' ? true : false}
                                    ChangeValue={(param: any) => {
                           
                                        window.localStorage.setItem("night", param.checked ? "true" : "false");
                                        window.location.reload();
                           
                                    }
                                    } />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-2">

                            <div className=''><img src={Mony.src} alt="notification" /></div>
                            <div className='flex-grow'> <Link href={siteInfo.fund}>
                                <b className='text-[var(--black)]'>{t("fund")}</b>
                            </Link>
                            </div>
                            <div className='flex-none'>
                                <Link className="flex flex-row items-center gap-x-2" href={siteInfo.fund}>
                                    <img src={ArrowSquare.src} alt="ArrowSquare" />
                                </Link>
                            </div>

                        </div>

                        <div onClick={() => { setOpenLogout(true) }} className="flex flex-row items-center gap-x-2">
                            <div className=''><img src={Logout.src} alt="notification" /></div>
                            <div className='flex-grow'><b className='text-[var(--black)]'>{t("logout2")}</b></div>
                        </div>
                        <div onClick={() => { setOpenRemove(true) }} className="flex flex-row items-center gap-x-2">
                            <div className=''><img src={Delete.src} alt="notification" /></div>
                            <div className='flex-grow'><b className='text-[var(--black)]'>{t("deleteMyAccount")}</b></div>
                        </div>

                    </div>

                </div>

            </DrawerBottom>

            {openNot && <NotificationBusinessDrawer changeOpen={(value: boolean) => setOpenNot(value)} isOpen={openNot} />}
            {openSupport && <SupportBusinessDrawer changeOpen={(value: boolean) => setOpenSupport(value)} isOpen={openSupport} />}
            {openLogout && <LogoutBusinessDrawer changeOpen={(value: boolean) => setOpenLogout(value)} isOpen={openLogout} />}
            {openLng && <LanguageDrawer changeOpen={(value: boolean) => setOpenLng(value)} isOpen={openLng} />}


            <ConfirmRejectDialog
                body={<></>}
                id='removes'
                open={openRemove}
                confirmFunction={() => { RemoveF(); setOpenRemove(false) }}
                confirmTitle={t("remove")}
                rejectTitle={t("no")}
                loading={false}
                rejectFunction={() => setOpenRemove(false)}
                title={t("confirmRemove")}

            />

        </>
    )
}
