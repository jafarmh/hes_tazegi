import React, { useRef, useState } from 'react'

import Trash from '@/asset/img/trash.svg'
import videoAdd from '@/asset/img/video-add.svg'

interface UploadVideoProps {
    changeValue?: Function,
    text: string,
    accept: string,
}

export default function UploadVideo({ changeValue, text, accept = ".mp4" }:UploadVideoProps) {
    const Refs = useRef<any>(null);
    const [fileName, setFileName] = useState("");

    const changeV = (file: any) => {
        setFileName(file.name)
        if (changeValue !== undefined) {
            changeValue(file)
        }
    }
    const RemoveFile = () => {
        if (Refs.current !== null) {
            Refs.current.value=''
            setFileName("")
        }
    }

    return (
        <>
         {fileName !== '' && <div className='bg-white flex flex-row items-center'>
                <b className="text-[.6em]">{fileName.substring(0,10)}... </b>
                <img className='cursor-pointer' src={Trash.src} alt='' onClick={() => RemoveFile()} />
            </div>}
        <div className='bg-[var(--lightOrang)] p-4 rounded-lg w-full flex flex-row justify-center gap-x-2 items-center relative'>
            <b className='text-[var(--orang)] text-xs' >{text}</b>
            <span><img src={videoAdd.src} alt="" /></span>

            <input
                className='customFileInput w-full h-full absolute left-0 bottom-0'
                ref={Refs}
                onChange={(event: any) =>   changeV(event.target.files[0]) }
                accept={accept} type="file" />

        </div>

        </>
    )
}
