'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function IcecreamCarousel() {
  return (
    <section className="bg-[#f7e7ad] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-[#741510] uppercase font-semibold tracking-wide border-b-2 border-[#741510] inline-block pb-1 mb-2">
          Outlets
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#741510] leading-snug">
          Relish Every <span className="text-[#e53b1e] italic">Sweet Bite</span> with Giani&apos;s
        </h2>
      </div>

      <div className="mt-12 max-w-6xl mx-auto relative">
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev text-[#741510] bg-white shadow-md p-2 rounded-full absolute left-0 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer hover:bg-[#e53b1e] hover:text-white transition hidden md:flex">
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next text-[#741510] bg-white shadow-md p-2 rounded-full absolute right-0 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer hover:bg-[#e53b1e] hover:text-white transition hidden md:flex">
          <FaArrowRight />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <Image
                  src={`/images/icecream${num}.avif`}
                  alt={`Giani's Icecream ${num}`}
                  width={600}
                  height={400}
                  className="w-full h-[280px] object-cover"
                />
                <div className="text-center text-[#741510] font-semibold py-4 text-lg">
                  Giani&apos;s Icecream {num}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
