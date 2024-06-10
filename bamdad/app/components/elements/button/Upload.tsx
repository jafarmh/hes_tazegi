import React, { useEffect, useRef, useState } from 'react'

import DocD from '@/asset/img/document-upload.svg'
import Trash from '@/asset/img/trash.svg'

interface UploadProps {
    changeValue?: Function,
    text?: string,
    color?: string,
    colorText?: string,
    iconImg?: string | undefined,
    accept?: string,
    width?: string,
    height?: string,
    padding?: string,
    name: string,
    Controller: any,
    getValues: Function,
    control: any,
    reset: Function,
    showFileName?: boolean,
    imgSrc?: any
}

export default function Upload({
    changeValue,
    text = "آپلود فایل رزومه (PDF, WORD, EXCEL)",
    color = "lightOrang",
    colorText = "orang",
    iconImg = undefined,
    width = "full",
    height = "auto",
    padding = "4",
    Controller,
    getValues,
    control,
    accept = ".xlsx,.xls,.doc, .docx,.pdf",
    name,
    reset,
    showFileName = true,
    imgSrc

}: UploadProps) {
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
            Refs.current.value = ''
            setFileName("")
            reset(name);
        }
    }

    useEffect(() => {


        let value = getValues(name)
        if (value !== undefined && value !== "") {
            setFileName(value.name)
            // if(Refs.current!==undefined&&Refs.current!==null)
            // Refs.current.value = value
        }

    }, [])

    return (
        <>
            <div className="flex flex-col items-center">
                {imgSrc && <div>
                    <img src={imgSrc} alt=".." className='rounded-xl w-28 h-28 object-cover' />
                </div>}
                {fileName !== '' && <div className={`${showFileName ? "bg-white" : ""} flex flex-row items-center w-fit p-1`}>
                    {showFileName && <b className="text-[.6em] ">{fileName.substring(0, 10)}... </b>}
                    <img className='cursor-pointer' src={Trash.src} alt='' onClick={() => RemoveFile()} />
                </div>}
            </div>
            <div className={`bg-[var(--${color})] p-${padding} rounded-lg w-${width} h-${height} flex flex-row justify-center gap-x-2 items-center relative`}>
                {text !== '' && <div><b className={`text-[var(--${colorText})] text-xs`} >{text}</b></div>}
                <div><img className={``} src={iconImg ?? DocD.src} alt="" /></div>

                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({ field }: { field: any }) => (
                        <input
                            ref={Refs}
                            className='customFileInput w-full h-full absolute left-0 bottom-0 '
                            onChange={
                                (event: any) => {
                                    field.onChange(event.target.files[0]);
                                    changeV(event.target.files[0])
                                }
                            }
                            accept={accept} type="file" />



                    )}
                />



            </div>

        </>

    )
}
