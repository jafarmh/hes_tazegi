import React, { useState } from 'react'

import ArrowSquare from '@/asset/img/arrow-square-left.png'
import Back from '@/asset/img/back.svg'
import BasicAccordion from '../../accordin';
import DrawerBottom from '..'
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
    data: any[]
}
//general,auth,account,safe,add
export default function FaqBusinessDrawer({ isOpen, changeOpen, data }: Props) {
    const {t}=useTranslation();
    const [openM, setOpenM] = useState(isOpen);
    const [activeMenu, setActiveMenu] = useState("general");
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    const GetDatas=(type:string)=>{
        return data.filter((item:any)=>item.section===type)
    }

    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='90%'>
                <div className="flex flex-col gap-y-6   mt-5" dir={dir}>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]'> {t("faq")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>

                    <div className="w-full mt-5 flex flex-col gap-y-4 text-xs">
                        <div className="flex flex-row justify-between items-center gap-x-2 ">
                            <div onClick={()=>setActiveMenu("general")} className={`${activeMenu === "general" ? "bg-[var(--blue)] text-white" : "text-[var(--gray)]"} p-2 rounded-2xl `}><small>{t("generalF")}</small></div>
                            <div onClick={()=>setActiveMenu("auth")} className={`${activeMenu==="auth"?"bg-[var(--blue)] text-white":"text-[var(--gray)]"}  p-2 rounded-2xl`}><small>{t("auth")}</small></div>
                            <div onClick={()=>setActiveMenu("account")} className={`${activeMenu==="account"?"bg-[var(--blue)] text-white":"text-[var(--gray)]"}  p-2 rounded-2xl`}><small>{t("account")}</small></div>
                            <div onClick={()=>setActiveMenu("safe")} className={`${activeMenu==="safe"?"bg-[var(--blue)] text-white":"text-[var(--gray)]"}  p-2 rounded-2xl`}><small>{t("safe")}</small></div>
                            <div onClick={()=>setActiveMenu("add")} className={`${activeMenu==="add"?"bg-[var(--blue)] text-white":"text-[var(--gray)]"}  p-2 rounded-2xl`}><small> {t("addProduct")}</small></div>

                        </div>


                    </div>
                    {activeMenu === "general" && <div className='flex flex-col gap-y-4 justify-center'>
                        <BasicAccordion data={GetDatas("general")}/>
                    </div>
                    }
                    {activeMenu === "auth" && <div className='flex flex-col gap-y-4 justify-center'>
                        <BasicAccordion data={GetDatas("auth")}/>
                    </div>
                    }
                    {activeMenu === "account" && <div className='flex flex-col gap-y-4 justify-center'>
                        <BasicAccordion data={GetDatas("account")}/>
                    </div>
                    }
                    {activeMenu === "safe" && <div className='flex flex-col gap-y-4 justify-center'>
                        <BasicAccordion data={GetDatas("safe")}/>
                    </div>
                    }
                    {activeMenu === "add" && <div className='flex flex-col gap-y-4 justify-center'>
                        <BasicAccordion data={GetDatas("add")}/>
                    </div>
                    }
                </div>

            </DrawerBottom>



        </>
    )
}
