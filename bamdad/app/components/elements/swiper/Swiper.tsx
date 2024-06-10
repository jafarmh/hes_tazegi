'use client';

import 'swiper/css';
import "swiper/css/pagination";
import "./style.css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import Brand1 from '../../../../asset/img/Brand1.png';
import Brand2 from '../../../../asset/img/Brand2.png';
import Brand3 from '../../../../asset/img/Brand3.png';
import Brand4 from '../../../../asset/img/brand4.png';
import Brand5 from '../../../../asset/img/brand5.png';
import left from '../../../../asset/img/arrowLeft.png';
import right from '../../../../asset/img/arrowRight.png';
import useRtlLtr from '@/app/hooks/RtlLtr';

// import required modules

// Import Swiper styles


export default () => {
  const dir =useRtlLtr();

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      // pagination={true}
      dir={dir}
      //modules={[Pagination]} 
      className="mySwiper"
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Brand1.src} alt='brand1' /></SwiperSlide>
      <SwiperSlide><img src={Brand2.src} alt='brand2' /></SwiperSlide>
      <SwiperSlide><img src={Brand3.src} alt='brand3' /></SwiperSlide>
      <SwiperSlide><img src={Brand4.src} alt='brand4' /></SwiperSlide>
      <SwiperSlide><img src={Brand5.src} alt='brand5' /></SwiperSlide>

      <SwiperSlide><img src={Brand1.src} alt='brand1' /></SwiperSlide>
      <SwiperSlide><img src={Brand2.src} alt='brand2' /></SwiperSlide>
      <SwiperSlide><img src={Brand3.src} alt='brand3' /></SwiperSlide>
      <SwiperSlide><img src={Brand4.src} alt='brand4' /></SwiperSlide>
      <SwiperSlide><img src={Brand5.src} alt='brand5' /></SwiperSlide>
    
    </Swiper>
  );
};