import { BrochureData } from '@/app/interface/Entity'
import React from 'react'
import Rectangle8 from '@/asset/img/Rectangle8.png'
import SearchBlueButton from '../elements/search/SearchBlueButton'
import SearchGray from '../elements/search/SearchGray'
import Star from '@/asset/img/star.svg'

export default function Archive({data}:{data:BrochureData}) {
    return (
        <div className=" p-2 flex flex-col mb-20 " >

            <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
                {/* <SearchBlueButton /> */}
                {[1, 2, 3, 4, 5, 6].map(() => (
                    <div className="flex flex-row p-1 items-center gap-x-4 mb-5 bg-[var(--white)] rounded-xl">
                        <div className="flex-none  "><img className="w-20" src={Rectangle8.src} /></div>
                        <div className="flex-grow flex flex-col gap-y-2">
                            <div className=""><p className="font-bold"> عنوان</p></div>
                            <div className="text-[var(--gray)] text-sm">
                                <p> تیتر موضوع </p>
                            </div>
                            <div className="">
                                <small className='text-[var(--gray)]'>لورم ایپسوم متن ساختگی با تولید است ...</small>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex-none flex flex-row text-sm'>
                                <div className="rotate-180  text-[var(--gray)]" style={{ writingMode: 'vertical-rl' }} >
                                    <span>1402/04/13</span>
                                </div>
                            </div>
                            <div>
                                <img src={Star.src} />
                            </div>

                        </div>
                    </div>))}

            </div>

        </div>
    )
}
