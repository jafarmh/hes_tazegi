'use client';

import React, { useEffect, useState } from 'react'

import PersonTypeDrawer from '../../elements/drawer/auth/PersonTypeDrawer';
import { setDataCategory } from '@/app/redux/reducer/general/Category';
import { setDataCountry } from '@/app/redux/reducer/general/Country';
import { useDispatch } from 'react-redux';

export default function Register({country,category}:{country:any,category:any}) {
    const [openPersonType,setOpenPersonType]=useState(true);
    const dispatch=useDispatch();
 

    useEffect(()=>{
        dispatch(setDataCountry(country))
        dispatch(setDataCategory(category.data))
       
    },[country,category])

    return (
        <>
            <PersonTypeDrawer changeOpen={(value: boolean) => setOpenPersonType(value)} isOpen={openPersonType} />
        </>
    )
}
