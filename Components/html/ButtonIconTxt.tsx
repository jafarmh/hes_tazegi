import { ButtonProps, ChildrenProps } from '@/interface/Element'

import React from 'react'

function ButtonIconTxt({ children,bg="bg-[--grayLight]",txt="text-[--grayTxt]" }: ButtonProps) {
    return (
        <div className={`${bg} ${txt} font-[600] rounded-[--radius] w-auto py-[10px] px-[24px] h-[40px] flex flex-row gap-x-2 justify-center items-center`}>
            {children}
        </div>
    )
}

export default ButtonIconTxt