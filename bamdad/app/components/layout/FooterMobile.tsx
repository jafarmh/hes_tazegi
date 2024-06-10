'use client'

import React, { useState } from 'react'

import Exam from '@/asset/img/Exam.svg'
import ExamOrange from '@/asset/img/ExamOrange.svg'
import Home from '@/asset/img/home-2.svg'
import Link from 'next/link'
import ProfileDrawer from '@/app/components/elements/drawer/auth/ProfileDrawer'
import Search from '@/asset/img/search.svg'
import User from '@/asset/img/user-octagon.svg'
import UserOrange from '@/asset/img/user-octagonOrange.svg'
import homeOrange from '@/asset/img/home-2Orange.svg'
import searchOrange from '@/asset/img/searchOrange.svg'
import { toast } from 'react-toastify'
import useCheckLogin from '@/app/hooks/CheckLogin'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function FooterMobile() {
    const [openProfile,setOpenProfile]=useState(false);
    const isLogin=useCheckLogin();
    const {t}=useTranslation();
 
    const pathname = usePathname()
    const homes=["/home","/exportSolution","/exhibition","/business"];
    const search=["/search","/filter"];

    return (
        <>
        <footer dir="rtl" className='z-40 fixed  bottom-0   w-full  max-[640px]:left-0  sm:w-[80%] md:w-[70%] lg:w-[40%] xl:w-[25%] 2xl:w-[25%]'>
            <div className="flex flex-row justify-between gap-x-10 bg-[var(--white)] p-5">
                <div><Link href={"/home"} ><img src={homes.includes(pathname)?homeOrange.src:Home.src}/></Link></div>
                <div><Link href={"/search"} ><img src={search.includes(pathname)?searchOrange.src:Search.src}/></Link></div>
                <div><Link href={"/bamdadService"} ><img src={pathname.includes("bamdadService")?ExamOrange.src:Exam.src}/></Link></div>
                
                <div><Link href={isLogin?"/profile":"/"} onClick={()=>{
                    if(!isLogin){
                        toast.error(t("loginReq"));
                        return;
                    }
                }} ><img src={pathname.includes("profile")?UserOrange.src:User.src}/></Link></div>
                 {/* <div onClick={()=>setOpenProfile(true)}><img src={User.src}></img></div> */}
            </div>
        </footer>
        {openProfile && <ProfileDrawer changeOpen={(value: boolean) => setOpenProfile(value)} isOpen={openProfile} />}

        </>

        
    )
}
