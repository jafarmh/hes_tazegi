'use client'

import React, { useEffect, useState } from 'react'

import Bg from "@/asset/login/bamdad1.svg"
import BgLD from "@/asset/login/logoLD.jpg"

// import Bg from "@/asset/login/logoL.jpeg"


// import Bg from "@/asset/img/backG.png"


interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  const [dark,setDark]=useState(false)

  useEffect(()=>{
        
    if(window.localStorage.getItem("night")!==null){
        if(window.localStorage.getItem("night")==="true"){
          setDark(true)
        }else{
          setDark(false);
        }
    }

},typeof window !== "undefined"?[window.localStorage.getItem("night")]:[])

  return (
    <div style={{
      backgroundImage: `url(${dark  ? BgLD.src : Bg.src})`,
      //backgroundPosition:"center",
      backgroundPositionX: "center",
      backgroundPositionY:"40%",
      backgroundRepeat: "no-repeat",
      backgroundSize:"contain",
    }}
      className="h-screen">
      {children}
    </div>
  )
}
