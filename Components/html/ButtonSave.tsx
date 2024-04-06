import ButtonSmall from './ButtonSmall'
import React from 'react'
import SaveRight from '@/asset/icon/save.svg'

function ButtonSave() {
  return (
    <ButtonSmall>
        <img src={SaveRight.src} alt="" />
    </ButtonSmall>
  )
}

export default ButtonSave