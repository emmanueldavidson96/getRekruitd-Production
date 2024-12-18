import React from 'react'
import Scard from './Scard'
import img from '../Images/s-img.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
         
          640: {
            slidesPerView: 1,  
            spaceBetween: 20,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Scard
            image={img}
            title='Hannah Schmitt'
            content='I was feeling lost in my job search, unsure how to tailor my skills and experience for the roles I truly wanted. This app completely changed the game! Getting matched with a mentor who understood my industry was a huge help. They reviewed my CV and provided actionable feedback, and the interview simulations were incredibly realistic.'
            p='May 8, 2020'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Scard
            image={img}
            title='Hannah Schmitt'
            content='I was feeling lost in my job search, unsure how to tailor my skills and experience for the roles I truly wanted. This app completely changed the game! Getting matched with a mentor who understood my industry was a huge help. They reviewed my CV and provided actionable feedback, and the interview simulations were incredibly realistic.'
            p='May 8, 2020'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Scard
            image={img}
            title='Hannah Schmitt'
            content='I was feeling lost in my job search, unsure how to tailor my skills and experience for the roles I truly wanted. This app completely changed the game! Getting matched with a mentor who understood my industry was a huge help. They reviewed my CV and provided actionable feedback, and the interview simulations were incredibly realistic.'
            p='May 8, 2020'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Scard
            image={img}
            title='Hannah Schmitt'
            content='I was feeling lost in my job search, unsure how to tailor my skills and experience for the roles I truly wanted. This app completely changed the game! Getting matched with a mentor who understood my industry was a huge help. They reviewed my CV and provided actionable feedback, and the interview simulations were incredibly realistic.'
            p='May 8, 2020'
          />
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default Slider;
