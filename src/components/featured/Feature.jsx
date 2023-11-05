import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectCoverflow, A11y } from 'swiper/modules';
import Card from '../card/Card';
import featureData from './data.js';
import './feature.css';
// Sample data for featured products

function Feature() {
  return (
    <div className=" bg-[#F1F1F1] py-[2rem]">
      <div className="flex justify-center text-3xl font-semibold text-black">
        Featured Product
      </div>
      <div className="mt-[2rem]">
        <Swiper
          modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
          loop={true}
          speed={500}
          spaceBetween={150}
          slidesPerView={'auto'}
          pagination={{ clickable: true }}
          effect={'coverflow'}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 50,
            modifier: 3,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
          }}
          className="featured_swiper"
        >
          {featureData.map((product, index) => (
            <SwiperSlide key={index}>
              <Card
                title={product.title}
                desc={product.desc}
                price={product.price}
                img={product.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Feature;
