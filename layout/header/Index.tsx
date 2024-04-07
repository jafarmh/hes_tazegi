'use client'

import React, { useState } from 'react'

import Category from './Category'
import { LeftLink } from './LeftLink'
import { RightLink } from './RightLink'

export const Header = () => {
    const [showCategory,setShowCategory]=useState(false);
    return (
        <header className='mt-[45px] text-[--gray] relative'>
            <div className='flex flex-row justify-between'>
                <LeftLink setShowCategory={()=>setShowCategory(!showCategory)}/>
                <RightLink/>
            </div>

            {showCategory&&<Category/>}
        </header>
    )
}
