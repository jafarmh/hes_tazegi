import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function LayoutMobileContainer(props: Props) {
  const { children } = props;

  return (
 
      <div className=" relative container mx-auto w-[92%] sm:w-[80%] md:w-[70%] lg:w-[40%] xl:w-[25%] 2xl:w-[25%] ">
        {children}
      </div>
 
  )
}
