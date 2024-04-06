import Broadcast from '../html/Broadcast'
import LeftSection from './LeftSection'
import React from 'react'
import RightSection from './RightSection'

function DetailComponent() {
  return (
    <div className='flex flex-col gap-y-4'>
        <Broadcast/>
        <div className="flex flex-row w-full justify-between mb-10  gap-x-4 flex-wrap">
            <div className='w-[70%]'><LeftSection/></div>
            <div className='w-[30%]'><RightSection/></div>
        </div>

    </div>
  )
}

export default DetailComponent