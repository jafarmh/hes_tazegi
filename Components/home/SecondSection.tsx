import Avatar from '@/asset/img/avatar1.png'
import Avatar2 from '@/asset/img/avatar2.png'
import Avatar3 from '@/asset/img/avatar3.png'
import Avatar4 from '@/asset/img/avatar4.png'
import ButtonArrowLeft from '../html/ButtonArrowLeft'
import ButtonArrowRight from '../html/ButtonArrowRight'
import CarYellow from '@/asset/img/carYellow.png'
import CartImgUser from '../html/CartImgUser'
import Food from '@/asset/img/food.png'
import Laptop from '@/asset/img/laptop.png'
import React from 'react'
import Support from '@/asset/img/support.png'
import VerticalRed from '../html/VerticalRed'

function SecondSection() {
    return (
        <div className='flex flex-col gap-y-8'>
            <div className="flex flex-row justify-between">
                <div className='flex flex-row items-baseline gap-x-1'>

                    <VerticalRed />

                    <h4 className='text-[20px] text-[--black] font-[500]'>
                        popular posts
                    </h4>
                </div>
                <div className='flex flex-row gap-x-2'>
                    <div><ButtonArrowLeft /></div>
                    <div><ButtonArrowRight /></div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between  ">
                <CartImgUser
                img={Support.src}
                title='Opening Day of Boating Season, Seattle WA'
                description='Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge'
                avatar={Avatar.src}
                name='James'
                date='August 18 , 2022'
                />
                <CartImgUser
                img={Laptop.src}
                title='How to choose the right laptop for programming'
                description='Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when'
                avatar={Avatar2.src}
                name='Mary'
                date='July 14 , 2022'
                />
                <CartImgUser
                img={CarYellow.src}
                title='How to Persuade Your Parents to Buy Fast Food'
                description='Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.'
                avatar={Avatar3.src}
                name='Jon Kantner'
                date='May 10 , 2022'
                />
                <CartImgUser
                img={Food.src}
                title='How to Persuade Your Parents to Buy Fast Food'
                description='Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge'
                avatar={Avatar4.src}
                name='James'
                date='August 18 , 2022'
                />
               
            </div>

        </div>
    )
}

export default SecondSection