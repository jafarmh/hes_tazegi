import ArrowLeft from '@/asset/icon/left.svg'
import ButtonSmall from './ButtonSmall'
import React from 'react'

function ButtonArrowLeft() {
  return (
    <ButtonSmall>
        <img src={ArrowLeft.src} alt="" />
    </ButtonSmall>
  )
}

export default ButtonArrowLeft