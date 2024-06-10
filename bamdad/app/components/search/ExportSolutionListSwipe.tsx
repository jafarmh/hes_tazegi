import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Empty from '@/asset/img/empty.jpg';
import { ExportSolutionProps } from '@/app/interface/Entity';
import Link from 'next/link';
import { Pagination } from 'swiper';
import WriterName from '../home/WriterName';
import { getImageProf } from '@/utility/Function';
import useRtlLtr from '@/app/hooks/RtlLtr';

export default function ExportSolutionListSwipe({ExportSolutionList}:{ExportSolutionList:ExportSolutionProps[]}) {
  const dir=useRtlLtr()

  return (
    <>
      {dir&&<Swiper
        slidesPerView={'auto'}
        allowTouchMove
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        
        dir={dir}
      >
         {ExportSolutionList.map((item) => (
               
               <SwiperSlide style={{ background:"var(--white)" }} className='mb-5 '>
                   <Link href={"/exportSolution/" + item.id}>
                    <img className='w-full h-40 rounded-2xl object-cover' src={getImageProf(item.attach)?.path??Empty.src} />
                     </Link>
                   <div><b className='text-sm'>{item.title}:{item.description.substring(0, 20)}...</b></div>
                   <WriterName
                       data={item.expert}
                   />
               </SwiperSlide>
           ))}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>}
    </>
  );
}