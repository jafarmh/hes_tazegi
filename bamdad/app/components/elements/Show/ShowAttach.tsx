import React, { useState } from 'react'

import { AttachProps } from '@/app/interface/Entity'
import Link from 'next/link'
import Pdf from '@/asset/img/pdf.png'
import Videos from './Videos'

interface Props {
    attach: AttachProps[],
    showImg?: boolean
}

export default function ShowAttach({ attach, showImg = true }: Props) {



    return (
        <>
            <div className="flex flex-row gap-2 flex-wrap mb-28">
                {attach.map((item) => {
                    switch (item.type) {
                        case "image": {

                            return <>
                                {showImg ?
                                    <div className="w-28 flex flex-col items-center">
                                        <img src={item.path} alt=".." className='rounded-xl w-28 h-28 object-cover' />
                                    </div> : <></>}
                            </>
                        }

                        case "video": {

                            return <>
                                <div className='mb-14'>
                                    <Videos item={item} />
                                </div>
                            </>
                        }


                        case "file": {

                            return <>
                                <div className="w-full flex flex-col items-center">
                                    <Link download className="" href={item.path} >
                                        <div className=''><img className=' ' src={Pdf.src} alt="pdf" /></div>
                                    </Link>
                                </div>
                            </>
                        }
                    }
                })}
            </div>
        </>
    )
}
