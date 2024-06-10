'use client'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DisableBtnLoadingBlueDarkMore } from '../elements/button/Btns';
import React from 'react'

export default function MoreBtn(
    {
        haveMore,
        click,
        disabled,
        loading
    }:{
        haveMore:boolean,
        disabled:boolean,
        loading:boolean,
        click:Function
    }
) {
    return (
        <div className='flex justify-center w-full'>
            {haveMore && <DisableBtnLoadingBlueDarkMore type='button' 
            click={click}
             disabled={disabled} 
             loading={loading} 
             text='' 
             icon={<AddCircleOutlineIcon />} />}
        </div>
    )
}
