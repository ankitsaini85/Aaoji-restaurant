'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

export default function MenuSlider() {
  return (
    <section className="bg-[#fef7e6] py-16 px-6 lg:px-20" id='menu'>
      <div className="text-center max-w-4xl mx-auto">
        <h4 className="uppercase text-[#741510] border-b-2 inline-block border-[#741510] pb-1 mb-2 tracking-wide">
          Explore Our Menu
        </h4>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#741510]">
          Explore the Magic of our <span className="text-[#e53b1e]">Savory Creations</span>
        </h2>
      </div>

      <div className="mt-12 max-w-5xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full max-w-[850px] h-auto overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/images/menu1.avif"
                alt="Menu Slide 1"
                width={1000}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full max-w-[850px] h-auto overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/images/menu2.avif"
                alt="Menu Slide 2"
                width={1000}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="text-center mt-10 space-y-4">
        <a href="/menu.pdf" download className="text-sm text-[#741510] underline">
          Download Menu
        </a>
        <br />
        <button className="bg-[#e53b1e] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#c43d18] transition">
          Call Us for Bookings
        </button>
      </div>
    </section>
  );
}
