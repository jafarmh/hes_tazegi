import FirstSection from './FirstSection'
import React from 'react'
import SecondSection from './SecondSection'

function HomeComponent() {
  return (
    <div className='flex flex-col gap-y-[68px] mb-10'>
        <FirstSection/>
        <SecondSection/>
    </div>
  )
}

export default HomeComponent