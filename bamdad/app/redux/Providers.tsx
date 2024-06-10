
'use client';

import '@/lng/i18n'

import React, { useEffect } from 'react';

import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux'
import { store } from './Store'
import { useTranslation } from 'react-i18next';

interface PP {
  children: React.ReactNode
}


export function Providers({ children }: PP) {
  const { i18n } = useTranslation();

  useEffect(()=>{
    const lng= window.localStorage.getItem("lng");
    i18n.changeLanguage(lng??"fa");
    
  },[])

  useEffect(()=>{
    const night= window.localStorage.getItem("night");
    if(night==="true"){
      //@ts-ignore
      import ("@/asset/css/mainDark.css") ;
    }else{
      //@ts-ignore
      import ("@/asset/css/main.css") ;
    }
   
  },[])
 

  return (
    <Provider store={store}>
      <CookiesProvider>
        {children}
      </CookiesProvider>
    </Provider>
  );
}