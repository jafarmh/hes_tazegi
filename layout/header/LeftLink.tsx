import React from 'react'
import down from '@/asset/icon/down.svg'

export const LeftLink = () => {
    return (
        <>
            <div className='flex flex-row gap-x-[34px] items-center'>
                <div>
                    <b className='text-[--orange]'>
                        MEGA.news
                    </b>
                </div>
                <div className='flex flex-row gap-1 items-center'>
                    <b >
                        Categories
                    </b>
                    <img src={down.src} alt="down" />
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
