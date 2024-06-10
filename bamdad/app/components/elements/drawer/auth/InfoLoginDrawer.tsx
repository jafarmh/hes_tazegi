'use  client'

import React, { useEffect, useState } from 'react'

import { BlueLightBtn } from '../../button/Btns'
import DrawerBottom from '..'
import Loader from '../../Loader';
import { RootState } from '@/app/redux/Store';
import { SiteInfoProps } from '@/app/interface/Entity';
import WelcomeLoginDrawer from './WelcomeLoginDrawer';
import { useRouter } from 'next/navigation';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function InfoLoginDrawer(props: Props) {

    const router = useRouter();
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [loading,setLoading] = useState(false);
    const [openWelcomeLogin, setOpenWelcomeLogin] = useState(false);
    const { t } = useTranslation();
    const SiteInfo:SiteInfoProps=useSelector((state:RootState)=>state.SiteInfoReducer);
  
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    useEffect(() => {
        setLoading(true)
        if (window.localStorage.getItem("0VbQvSw1sB") !== null) {
            router.push("/home")
            
        }else{
            setLoading(false)
        }

    }, [])
    const dir=useRtlLtr()

    return (
        <>


            <DrawerBottom isOpen={openM} changeOpen={change} height='170px' backgroundColor='transparent'>
                <div className="flex flex-col h-[170px] mb-4 px-4 mt-2 text-center gap-y-4" dir={dir}>

                    <div className="flex flex-row justify-center">
                        <b className='text-[var(--black)]' >{t("title")}</b>
                    </div>
                    <div className="basis-1/2 flex flex-row items-center flex-1">
                        <p className="text-[var(--gray)] text-sm">{SiteInfo.loginInfo??t("lorm")}</p>
                    </div>
                   {loading?    <Loader />: <div className="flex flex-row w-full gap-x-1 flex-grow items-end pb-4">
                        <div className=' basis-[45%] text-[.6em] flex-1'>
                            <BlueLightBtn click={() =>  {setLoading(true);router.push("/home")}} text={t("LogGuest")} />
                        </div>
                        <div className=' basis-[45%] flex-1'>
                            <button
                                className='bg-gradient-to-r    p-[.9rem] rounded-xl from-[var(--blueColor)] via-[var(--blueColor)] to-[var(--blue)]'
                                // className='bg-gradient-to-r  max-[350px]:p-[.57rem] max-[400px]:p-[.97rem] p-[1.003rem] rounded-xl from-[var(--blueColor)] via-[var(--blueColor)] to-[var(--blue)]'
                                onClick={() => setOpenWelcomeLogin(true)}
                            >
                                <p className='text-[.7em] text-white'>{t("loginToAccount")}</p>
                            </button>
                        </div>

                    </div>}




                </div>

            </DrawerBottom>
            {openWelcomeLogin && <WelcomeLoginDrawer changeOpen={(value: boolean) => setOpenWelcomeLogin(value)} isOpen={openWelcomeLogin} />}


        </>
    )
}
