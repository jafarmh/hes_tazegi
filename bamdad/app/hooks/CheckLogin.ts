import React, { useEffect, useState } from 'react'

export default function useCheckLogin() {
    const [isLogin,setIsLogin]=useState(false);

    useEffect(()=>{
        if(window.localStorage.getItem("0VbQvSw1sB")!==null){
            setIsLogin(true);
        }
    },[])
    return isLogin
 //   return window.localStorage.getItem("0VbQvSw1sB")!==null
}
