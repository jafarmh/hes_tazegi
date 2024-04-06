import ButtonSave from '@/Components/html/ButtonSave'
import React from 'react'
import avatar from '@/asset/img/avatar.png'
import down from '@/asset/icon/down.svg'
import more from '@/asset/icon/more.svg'
import search from '@/asset/icon/search.svg'

export const RightLink = () => {
    return (
        <>
            <div className='flex flex-row gap-x-[34px] text-[--gray]  items-center'>
                <div className='bg-[--grayLight] rounded-[--radius] px-[14px] py-[16px] flex flex-row flex-grow gap-x-2 items-center w-[399px]'>
                    <div>
                        <img src={more.src} alt="more" />
                    </div>
                    <div className='flex-grow'>
                        <input inputMode='search' className='placeholder:text-[--gray] border-none outline-none bg-transparent' placeholder='Search anything' />
                    </div>
                    <div >
                        <img src={search.src} alt="search" />

                    </div>
                </div>

                <div className='flex flex-row gap-1 items-center'>
                   <div>
                    <img src={avatar.src} alt="avatar" />
                   </div>
                   <div>
                    <b className='text-[--black]'>Behzad</b>
                   </div>
                   <div>
                    <img src={down.src} alt="down" />
                   </div>

                </div>
               
                <ButtonSave/>
               


            </div>
        </>
    )
}
