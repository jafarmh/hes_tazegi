import { DisableBtnLoadingBlue, DisableBtnLoadingBlueDark, DisableBtnLoadingBlueGradin } from '../button/Btns'

import Link from 'next/link'
import React from 'react'
import SearchGray from './SearchGray'
import Vector from '../../../../asset/img/Vector.png'

export default ({ changeValue, ClickSearch, disabled, loading }: {
    changeValue: Function,
    ClickSearch: Function,
    loading: boolean,
    disabled: boolean,
}) => {
    return (
        <>
            <div className="flex flex-row gap-x-2 mb-5">
                <div className='flex-grow'><SearchGray changeValue={changeValue} /></div>
                <div className='flex-none '>

                    {/* <button onClick={() => ClickSearch()} className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>

                    </button> */}

                    <DisableBtnLoadingBlueDark
                        click={() => ClickSearch()}
                        disabled={disabled}
                        loading={loading}
                        icon={<img className='h-5' src={Vector.src} alt='filter' />}
                        text='' />
                </div>
            </div>
        </>
    )
}

export const SearchLinkFilter = () => {
    return (
        <>
            <Link href={"/filter"}>
                <div className="flex flex-row gap-x-2 mb-5">
                    <div className='flex-grow'><SearchGray changeValue={() => { }} /> </div>
                    <div className='flex-none'>
                        <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>
                            <img src={Vector.src} alt='filter' />
                        </button>
                    </div>
                </div>
            </Link>
        </>
    )
}
