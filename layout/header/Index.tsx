import { LeftLink } from './LeftLink'
import React from 'react'
import { RightLink } from './RightLink'

export const Header = () => {
    return (
        <header className='mt-[45px] text-[--gray]'>
            <div className='flex flex-row justify-between'>
                <LeftLink/>
                <RightLink/>
            </div>
        </header>
    )
}
