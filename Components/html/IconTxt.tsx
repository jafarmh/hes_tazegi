import { IconTxtProps } from '@/interface/Element'
import React from 'react'

function IconTxt({icon,txt}:IconTxtProps) {
    return (
        <div className='flex flex-row gap-x-1 text-[--grayTxt] font-[500]'>
            <img src={icon} alt="date" />
            <span>{txt}</span>
        </div>
    )
}

export default IconTxt