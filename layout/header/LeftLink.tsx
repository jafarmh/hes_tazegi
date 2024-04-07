'use client';

import React, { useState } from 'react'

import HorizontalRed from '@/Components/html/HorizontalRed';
import down from '@/asset/icon/down.svg'

export const LeftLink = ({ setShowCategory }: { setShowCategory: Function }) => {
    const [rotate, setRotate] = useState(false);
    const [pagesShow, setPagesShow] = useState(false);

    const ClickCategory = () => {
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
                <div onClick={ClickCategory} className='flex flex-row gap-1 items-center '>
                    <div className=' flex flex-col gap-1'>
                        <b>Categories</b>
                        <span>  {rotate && <HorizontalRed />}</span>

                    </div>
                    <img style={rotate ? { transform: 'rotate(-180deg)', transitionDuration: "1s" } : { transform: 'rotate(0deg)', transitionDuration: "1s" }} src={down.src} alt="down" />
                </div>

                <div onMouseOver={()=>setPagesShow(true)} onMouseOut={()=>setPagesShow(false)} className='flex flex-row gap-1 items-center relative'>

                    <div className=' flex flex-col gap-1'>
                        <b>Pages</b>
                        <span>  {pagesShow && <HorizontalRed />}</span>

                    </div>
                    <img style={pagesShow ? { transform: 'rotate(-180deg)', transitionDuration: "1s" } : { transform: 'rotate(0deg)', transitionDuration: "1s" }} src={down.src} alt="down" />

                    {pagesShow && <div className='absolute top-10 bg-white rounded-[--radius] w-[200px]  z-20 shadow-[--shadow] '>
                        <div className='flex flex-col gap-3  p-8'>

                            {["One", "Two", "Three", "Four"].map((item) => <b>Sub menu {item}</b>)}
                        </div>

                    </div>}
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
