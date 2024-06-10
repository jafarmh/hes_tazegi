import React from 'react'
import { Switch } from '@mui/material'
import Them from '../Them';

export default function SwitchE({ChangeValue,Disabled=false,checked=false}:{ChangeValue:Function,Disabled?:boolean,checked?:boolean}) {

 

  const label = { inputProps: { 'aria-label': 'Switch demo' } };


  return (
    <>
      <Them  >
        <Switch 
        checked={checked}
        {...label} 
        disabled={Disabled} 
        onChange={(event: React.ChangeEvent)=>ChangeValue(event.target)}/>
      </Them>
    </>
  )
}
