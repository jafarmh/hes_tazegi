import { CategoryHeaderProps } from '@/interface/Element'
import React from 'react'
import VerticalRed from './VerticalRed'

function CategoryHeader({img,title,list}:CategoryHeaderProps) {
    return (
        <div className="flex flex-row gap-x-2">
            <img src={img} alt="" className='rounded-[--radius] w-[220px] h-[200px] object-cover' />
            <div className="flex flex-col gap-y-4 font-[500]">
                <div className="flex flex-row gap-x-1 items-center">
                    <VerticalRed />
                    <b>{title}</b>

                </div>
                {list.map((item)=><span>{item}</span>)}
                
           
            </div>
        </div>
    )
}

export default CategoryHeader