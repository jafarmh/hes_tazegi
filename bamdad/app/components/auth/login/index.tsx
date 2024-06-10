'use client';

import React, { useEffect, useRef, useState } from 'react'
import { emptyDataSiteInfo, setDataSiteInfo } from '@/app/redux/reducer/general/SiteInfo';

import LanguageDrawer from '../../elements/drawer/auth/LanguageDrawer';
import Loader from '../../elements/Loader';
import { SiteInfoProps } from '@/app/interface/Entity';
import gif from '@/asset/login/gif.gif';
import useCheckLogin from '@/app/hooks/CheckLogin';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

type Props={
    SiteInfo:SiteInfoProps
}

export default function Login({SiteInfo}:Props) {
    const timer = useRef<any>(null);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const isLogin=useCheckLogin();
    const [loading,setLoading] = useState(false);
    const router = useRouter();
    const dispatch=useDispatch();
 
    useEffect(() => {
        if(isLogin){
            clearTimeout(timer.current)
            setLoading(true)
            router.push("/home")
        }else{
          
            timer.current=setTimeout(() => {
                setOpenLanguage(true)
            }, 2500);
     
            // setLoading(false)
            // setShowGif(true)
          
            //     setTimeout(() => {
            //         setShowGif(false)
            //         setOpenLanguage(true)
            //     }, 4500);
          
        }
      
    }, [isLogin])

    useEffect(()=>{
        if(SiteInfo!==undefined){
            dispatch(emptyDataSiteInfo())
            dispatch(setDataSiteInfo(SiteInfo))
        }

    },[SiteInfo])
  

    return (
        <>
            {/* {showGif && <img src={gif.src} className='w-[100%] h-[100%] object-cover' alt="" />}
            {!showGif && loading?  <Loader />:!showGif?<LanguageDrawer changeOpen={(value: boolean) => setOpenLanguage(value)} isOpen={openLanguage} />:<></>} */}
            {( loading )&&  <Loader />}
            {( openLanguage )&&  <LanguageDrawer changeOpen={(value: boolean) => { setOpenLanguage(true);}} isOpen={openLanguage} />}
        </>
    )
}
