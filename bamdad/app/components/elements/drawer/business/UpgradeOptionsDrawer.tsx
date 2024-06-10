import React, { useState } from 'react'

import DrawerBottom from '..'
import Medal from '@/asset/img/medal-star.svg';
import PriceShow from '@/app/components/common/PriceShow';
import RadioImg from '@/asset/img/IconRadioButton.png'
import { RootState } from '@/app/redux/Store';
import arrowD from '@/asset/img/arrowDownBlue.svg'
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useSelector } from 'react-redux';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    ChangeValue: Function,
    setId: Function,
    window?: () => Window;
}
export default function UpgradeOptionsDrawer(props: Props) {

    const { isOpen, changeOpen, ChangeValue, setId } = props
    const Data = useSelector((state: RootState) => state.Ranks);
 
    let bg = ['var(--lightOrang)', 'var(--lightBlue)'];
    const dir = useRtlLtr()
    return (
        <>
            <DrawerBottom isOpen={isOpen} changeOpen={changeOpen} height='90%'>
                <div className="flex flex-col gap-y-4 " dir={dir}>
                    {

                        Data.map((item, index) => (
                            <div onClick={() => { ChangeValue(item.name); setId(item.id); changeOpen(!isOpen) }} className='w-full p-2 '>
                                <div style={{ backgroundColor:item.color }} className={`bg-[${item.color}] cursor-pointer rounded-xl p-4 flex flex-col gap-y-4`}>
                                    <div className="flex flex-row">
                                        <div className="flex-grow flex flex-row">
                                            <div><img src={RadioImg.src} /></div>
                                            <div><img src={Medal.src} /></div>
                                            <div><b className='text-[var(--blue)]'>{item.name}</b> </div>
                                        </div>
                                        <div className="flex-none"><PriceShow price={item.price} /></div>
                                    </div>
                                    <div >
                                        <p className="text-[var(--gray)]">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-center justify-end">
                                        {/* <b className='text-[var(--blue)]'>مشاهده بیشتر</b><small className='text-[var(--blue)]'><img src={arrowD.src} alt="" /></small > */}

                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* <div onClick={()=>{ChangeValue("برنز");changeOpen(!isOpen)}} className='w-full p-2 '>
                        <div className='bg-[var(--lightBlue)] cursor-pointer rounded-xl p-4 flex flex-col gap-y-4'>
                            <div className="flex flex-row">
                                <div className="flex-grow flex flex-row">
                                    <div><img src={RadioImg.src} /></div>
                                    <div><b className='text-[var(--blue)]'>برنز</b> </div>
                                </div>
                                <div className="flex-none"><PriceShow /></div>
                            </div>
                            <div >
                                <p className="text-[var(--gray)]">
                                پنجره نقل و انتقالات تابستانی نزدیک است و شایعات زیادی در مورد اینکه چه کسی به کجا نقل ...
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-end">
                            <b className='text-[var(--blue)]'>مشاهده بیشتر</b><small className='text-[var(--blue)]'><img src={arrowD.src} alt="" /></small >

                            </div>
                        </div>
                    </div>

                    
                    <div onClick={()=>{ChangeValue("نقره");changeOpen(!isOpen)}} className='w-full p-2 '>
                        <div className='bg-[var(--lightOrang)] cursor-pointer rounded-xl p-4 flex flex-col gap-y-4'>
                            <div className="flex flex-row">
                                <div className="flex-grow flex flex-row">
                                    <div><img src={RadioImg.src} /></div>
                                    <div><b className='text-[var(--gray)]'>نقره</b> </div>
                                </div>
                                <div className="flex-none"><PriceShow /></div>
                            </div>
                            <div >
                                <p className="text-[var(--gray)]">
                                پنجره نقل و انتقالات تابستانی نزدیک است و شایعات زیادی در مورد اینکه چه کسی به کجا نقل ...
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-end">
                            <b className='text-[var(--blue)]'>مشاهده بیشتر</b><small className='text-[var(--blue)]'><img src={arrowD.src} alt="" /></small >

                            </div>
                        </div>
                    </div>


                    
                    <div onClick={()=>{ChangeValue("طلا");changeOpen(!isOpen)}} className='w-full p-2 '>
                        <div style={{ background: 'linear-gradient(166deg, rgba(85, 212, 235, 0.16) 0%, rgba(6, 60, 143, 0.16) 100%)' }} className='  cursor-pointer rounded-xl p-4 flex flex-col gap-y-4'>
                            <div className="flex flex-row">
                                <div className="flex-grow flex flex-row">
                                    <div><img src={RadioImg.src} /></div>
                                    <div><b className='text-[var(--blue)]'>طلا</b> </div>
                                </div>
                                <div className="flex-none"><PriceShow /></div>
                            </div>
                            <div >
                                <p className="text-[var(--gray)]">
                                پنجره نقل و انتقالات تابستانی نزدیک است و شایعات زیادی در مورد اینکه چه کسی به کجا نقل ...
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-end">
                            <b className='text-[var(--blue)]'>مشاهده بیشتر</b><small className='text-[var(--blue)]'><img src={arrowD.src} alt="" /></small >

                            </div>
                        </div>
                    </div> */}
                </div>

            </DrawerBottom>
        </>
    )
}
