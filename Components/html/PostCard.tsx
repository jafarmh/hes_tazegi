import { ImgCardProps } from '@/interface/Element'
import React from 'react'

function PostCard({img,title,text}:ImgCardProps) {
  return (
    <div className="flex flex-row gap-x-2 items-center">
    <img src={img} alt="post1" />
    <div className='flex flex-col gap-y-2'>
      <b className='text-[--gray]'>{title}</b>
      <small>{text}</small>
    </div>
  </div>
  )
}

export default PostCard