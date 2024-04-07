import { ImgCardProps } from '@/interface/Element'
import React from 'react'

function ImgCart({img,title,text,width="w-[360px]"}:ImgCardProps) {
    return (
        <div style={{ backgroundImage: `url(${img})` }}
            className={`h-[452px] ${width} rounded-[--radius] flex flex-col justify-end  `}>
            <div className='flex flex-col gap-1 bg-[--blur] p-[16px] rounded-[--radius] mb  m-[10px] top-[325px] h-[117px] '>
                <h3 className='text-[--black] text-[25px] font-[600]'>{title}</h3>
                <span className='text-[14px]'>
               {text.substring(0,90)}...
                </span>

            </div>
        </div>
    )
}

export default ImgCart