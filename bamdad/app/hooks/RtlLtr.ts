'use client'

import React, { useEffect, useState } from 'react'

export default function useRtlLtr() {
    const [dir,setDir]=useState<string|undefined>(undefined);

    useEffect(()=>{
        
        if(window.localStorage.getItem("lng")!==null){
            if(window.localStorage.getItem("lng")==="en"){
                setDir("ltr")
            }else{
                setDir("rtl");
            }
        }

    },typeof window !== "undefined"?[window.localStorage.getItem("lng")]:[])
  return dir;
}
