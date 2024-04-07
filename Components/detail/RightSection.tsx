import Advertising from '@/asset/img/Advertising.png';
import Advertising2 from '@/asset/img/Advertising2.png';
import Avatar2 from '@/asset/img/avatar2.png';
import ButtonIconTxt from '@/Components/html/ButtonIconTxt';
import Comment from '@/asset/icon/comment.svg';
import Plus from '@/asset/icon/plus.svg';
import Post1 from '@/asset/img/post1.png';
import Post2 from '@/asset/img/post2.png';
import Post3 from '@/asset/img/post3.png';
import Post4 from '@/asset/img/post4.png';
import Post5 from '@/asset/img/post5.png';
import PostCard from '../html/PostCard';
import React from 'react'
import Save from '@/asset/icon/save.svg';
import Send from '@/asset/icon/send.svg';
import VerticalRed from '../html/VerticalRed';

function RightSection() {
  return (
    <div className='flex flex-col gap-4'>
      <section className="flex flex-row gap-x-2">
        <ButtonIconTxt>
          <img src={Send.src} alt="" />
          <span>Share</span>
        </ButtonIconTxt>
        <ButtonIconTxt>
          <img src={Save.src} alt="" />
          <span>Marking</span>
        </ButtonIconTxt>
        <ButtonIconTxt>
          <img src={Comment.src} alt="" />
          <span>Comment</span>
        </ButtonIconTxt>

      </section>
      <section>
        <div className='bg-[--grayLight] rounded-[--radius] py-[13px] px-[16px] flex flex-row justify-between gap-x-2'>
          <img src={Avatar2.src} alt='Avatar' className='w-[87px] h-[87px] rounded-[--radius]' />
          <div className='flex flex-col gap-2 flex-grow'>
            <b>Louis Hoebregts </b>
            <span className='w-[105px]'>
              <ButtonIconTxt bg='bg-[--redButton]' txt='text-white'>
                <img src={Plus.src} alt="" />
                <span>Follow</span>

              </ButtonIconTxt></span>

          </div>
          27 post
        </div>

      </section>
      <section>
        <div className='bg-[--grayLight] rounded-[--radius] py-[13px] px-[16px] flex flex-col justify-between gap-x-2 gap-y-[21px]'>
          <div className="flex flex-row items-center gap-x-2">
            <VerticalRed />
            <h4 className='text-[20px] font-[500] text-[--gray]'>Tags</h4>
          </div>
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-[14px] font-[500]">
            <span>Montenegro</span>
            <span>Visit Croatia</span>
            <span>Luxury Travel</span>
            <span>Travel Log</span>
            <span>Paradise Island</span>
            <span>Travel Info</span>

          </div>



        </div>

      </section>
      <section>
        <div className='bg-[--grayLight] rounded-[--radius] py-[13px] px-[16px] flex flex-col justify-between gap-x-2 gap-y-[21px]'>
          <div className="flex flex-row items-center gap-x-2">
            <VerticalRed />
            <h4 className='text-[20px] font-[500] text-[--gray]'>Top Post</h4>
          </div>
          <PostCard img={Post1.src} title='How to Spend the Perfect Day on Croatia’s Most Magical Island'  text='Subhead'/>
          <PostCard img={Post2.src} title='How to Spend the Perfect Day on Croatia’s Most Magical Island'  text='Subhead'/>
          <PostCard img={Post3.src} title='How to Spend the Perfect Day on Croatia’s Most Magical Island'  text='Subhead'/>
          <PostCard img={Post4.src} title='How to Spend the Perfect Day on Croatia’s Most Magical Island'  text='Subhead'/>
          <PostCard img={Post5.src} title='How to Spend the Perfect Day on Croatia’s Most Magical Island'  text='Subhead'/>
          
         



        </div>

      </section>
      <section>
        <div className=' rounded-[--radius] py-[13px] px-[16px] flex flex-col justify-between gap-x-2 gap-y-[21px]'>
           <img src={Advertising.src} alt="" />
           <img src={Advertising2.src} alt="" />
 
        </div>

      </section>

    </div>
  )
}

export default RightSection