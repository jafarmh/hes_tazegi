import { ChildrenProps } from '@/interface/Element'
import React from 'react'

function ButtonSmall({ children }: ChildrenProps) {
    return (
        <div className='  bg-[--grayLight] rounded-[--radius] w-[40px] h-[40px] flex justify-center items-center'>
            {children}
        </div>
    )
}

export default ButtonSmall