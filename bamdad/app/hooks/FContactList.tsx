'use client'

import React, { useEffect, useState } from 'react'

import { GetUserContactUsList } from '../redux/ApiCall/User';

export const useFContactList = (fetch=true) => {

    const[loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

    useEffect(()=>{
        if(fetch){
            setLoading(true);

            GetUserContactUsList((res:any)=>{
                if(res){
                    setLoading(false);
                    setData(res);
                }
            })
        }

    },[fetch])

  return {loading,data};
}
