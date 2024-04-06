import React from 'react'
import Right from '@/asset/icon/right.svg'

function Broadcast() {
  return (
    <div className='flex flex-row gap-x-[2px] items-center'>
      <b>Home</b>
      <img src={Right.src} alt="Right" />
      <b>Featured</b>
      <img src={Right.src} alt="Right" />
      <span className='text-[#3E323280]'>How to Spend the Perfect Day on Croatia’s Most Magical Island</span>
 

    </div>
  )
}

export default Broadcast