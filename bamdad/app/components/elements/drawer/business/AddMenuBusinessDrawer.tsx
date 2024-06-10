import { BlueLightBtn, OrangLightBtn } from '../../button/Btns';
import React, { useState } from 'react'

import AddEditBrochureBusinessDrawer from './AddEditBrochureBusinessDrawer';
import AddEditProductBusinessDrawer from './AddEditProductBusinessDrawer';
import DrawerBottom from '..'
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function AddMenuBusinessDrawer(props: Props) {
    const {t}=useTranslation()
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [openProductMenu,setOpenProductMenu]=useState(false);
    const [openServiceMenu,setOpenServiceMenu]=useState(false);
    const [openBrochureMenu,setOpenBrochureMenu]=useState(false);
    
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const dir=useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='200px'>
                <div className="flex flex-col gap-y-2 mb-4 px-4 mt-2 text-center" dir={dir}>
                
                    <div className="flex flex-col w-full gap-y-2 ">
                        <div className=' basis-1/2'>
                            <BlueLightBtn click={()=>setOpenServiceMenu(true)} text={t("addService")}/>
                        </div>
                        <div className=' basis-1/2'>
                            <OrangLightBtn click={()=>setOpenProductMenu(true)}  text={t("addProduct")}/>
                        </div>
                        <div className=' basis-1/2'>
                            <BlueLightBtn click={()=>setOpenBrochureMenu(true)}  text={t("addBrochure")}/>
                        </div>
                    </div>




                </div>

            </DrawerBottom>

            {openProductMenu&&<AddEditProductBusinessDrawer type='product' changeOpen={(value:boolean)=>setOpenProductMenu(value)} isOpen={openProductMenu} />}
            {openServiceMenu&&<AddEditProductBusinessDrawer type='service' changeOpen={(value:boolean)=>setOpenServiceMenu(value)} isOpen={openServiceMenu} />}
            {openBrochureMenu&&<AddEditBrochureBusinessDrawer changeOpen={(value:boolean)=>setOpenBrochureMenu(value)} isOpen={openBrochureMenu} />}

            
        </>
    )
}
