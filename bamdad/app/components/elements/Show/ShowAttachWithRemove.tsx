import React, { useState } from 'react'

import { AttachProps } from '@/app/interface/Entity'
import ConfirmRejectDialog from '../AgreeDialog'
import Link from 'next/link'
import Pdf from '@/asset/img/pdf.png'
import Trash from '@/asset/img/trash.svg'
import Videos from './Videos'
import { useTranslation } from 'react-i18next'

interface Props {
    attach: AttachProps[],
    RemoveF: Function
}

export default function ShowAttachWithRemove({ attach, RemoveF }: Props) {
    const [openRemove,setOpenRemove]=useState(false);
    const [selectData, setSelectData] = useState<any>()
    const {t}=useTranslation();

    return (
        <>
            <div className="flex flex-row gap-2 flex-wrap mb-10">
                {attach.map((item) => {
                    switch (item.type) {
                        case "image": {

                            return <>
                                <div className="w-28 flex flex-col items-center">
                                    <img src={item.path} alt=".." className='rounded-xl w-28 h-28 object-cover' />
                                    <img onClick={() => {
                                        // RemoveF(item) 
                                        setSelectData(item);
                                        setOpenRemove(true)
                                         }} src={Trash.src} alt="trash" className='cursor-pointer w-5 h-5' />
                                </div>
                            </>
                        }

                        case "video": {

                            return <>

                                <div className="w-full flex-grow flex items-center flex-col  gap-4 p-2">
                                    <div className='flex-grow w-full'>
                                    <Videos item={item} />
                                    </div>
                                    {/* <video src={item.path} className='rounded-xl' /> */}
                                    <div className='mt-[2.5rem]'><img onClick={
                                        () => {
                                            setSelectData(item);
                                            setOpenRemove(true)
                                            //RemoveF(item)
                                        }
                                        } src={Trash.src} alt="trash" className='cursor-pointer w-5 h-5' /></div>
                                </div>
                                
                            </>
                        }


                        case "file": {

                            return <>
                                <div className="w-full flex flex-col items-center">
                                    <Link className="" href={item.path} target='_blank'>
                                        <div className=''><img className=' ' src={Pdf.src} alt="pdf" /></div>
                                    </Link>
                                    <img onClick={() =>{
                                            setSelectData(item);
                                            setOpenRemove(true)
                                            //RemoveF(item)
                                        }} src={Trash.src} alt="trash" className='cursor-pointer w-5 h-5' />
                                </div>
                            </>
                        }
                    }
                })}
            </div>

            <ConfirmRejectDialog
                body={<></>}
                id='removes'
                open={openRemove}
                confirmFunction={()=>{RemoveF(selectData);setOpenRemove(false)}}
                confirmTitle={t("remove")}
                rejectTitle={t("no")}
                loading={false}
                rejectFunction={() => setOpenRemove(false)}
                title={t("confirmRemove")}

            />
        </>
    )
}
