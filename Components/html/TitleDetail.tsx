import React from 'react'
import { TitleDetailProps } from '@/interface/Element'

function TitleDetail({title,detail}:TitleDetailProps) {
    return (
        <>
            <h4 className='text-[--gray] font-[500] text-[20px]'>{title}</h4>
            <p className='text-[--gray] font-[400] text-[18px] leading-[34px]'>
                {detail}
            </p>
        </>
    )
}

export default TitleDetail