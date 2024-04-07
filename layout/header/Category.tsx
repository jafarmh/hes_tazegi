import Advertising from '@/asset/img/Advertising.png'
import Car from '@/asset/img/carYellow.png'
import CategoryHeader from '@/Components/html/CategoryHeader'
import Food from '@/asset/img/food.png'
import React from 'react'

function Category() {
    return (
        <div className='absolute w-full bg-white rounded-[--radius] p-4 top-[100%] left-0 z-10 shadow-[0px_0px_32px_0px_#00000012]'>
            <div className="flex flex-row">
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-4">
                    {[1,2,3,4,5,6].map((item)=>   <CategoryHeader
                        img={Car.src}
                        title='Car'
                        list={["Car News", "Car Articles", "Car Price", "Car Video"]} />)}
                 

                </div>
                <div className='flex flex-col gap-4 w-[45%]'>
                    {[1,2,3].map((item)=><img src={Advertising.src} className='rounded-[--radius] w-full' />)}

                </div>
            </div>

        </div>
    )
}

export default Category