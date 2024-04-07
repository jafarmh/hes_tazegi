'use client';

import React, { useState } from 'react'

import HorizontalRed from '@/Components/html/HorizontalRed';
import down from '@/asset/icon/down.svg'

export const LeftLink = ({setShowCategory}:{setShowCategory:Function}) => {
    const [rotate,setRotate]=useState(false);

    const ClickCategory=()=>{
        setRotate(!rotate);
        setShowCategory()
    }

    return (
        <>
            <div className='flex flex-row gap-x-[34px] items-center relative'>
                <div>
                    <b className='text-[--orange]'>
                        MEGA.news
                    </b>
                </div>
                <div onClick={ClickCategory }  className='flex flex-row gap-1 items-center '>
                    <div className=' flex flex-col gap-1'>
                        <b>Categories</b>
                        <span>  {rotate&& <HorizontalRed/>}</span>
                        
                    </div>
                    <img style={rotate?{ transform:'rotate(-180deg)', transitionDuration:"1s" }:{ transform:'rotate(0deg)', transitionDuration:"1s"}} src={down.src} alt="down" />
                </div>
              
                <div className='flex flex-row gap-1 items-center'>
                    <b >
                        Pages
                    </b>
                    <img src={down.src} alt="down" />
                </div>
                <div>
                    <b  >
                        Contact us
                    </b>
                </div>
                <div>
                    <b  >
                        About us
                    </b>
                </div>
            
            </div>
        </>
    )
}
