import React from 'react';
import { CardData } from '../content/CardData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function HottestCards() {
  return (
    <div className="overflow-hidden no-scrollbar">
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          
          className='mySwiper '
          // navigation
          pagination={{
            clickable: true, // Make the pagination bullets clickable
            dynamicBullets: true, // Adds dynamic sizing of bullets
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet">${index + 1}</span>`; 
            }
          }}
          
          breakpoints={{
            320:{
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3, 
            },
            1024: {
              slidesPerView: 4, 
            },
          }}
        >
          {CardData.map((card, index) => (
            <SwiperSlide key={index} className='swiper-container' >
              <div className="items-center flex">
                <div className="max-w-xs bg-white rounded-lg  shadow-lg overflow-hidden">
                  <div className="relative h-[195px]">
                    <img src={card.Image} alt="Hottest Card" />
                  </div>
                  <div className="p-4 md:w-[210px]">
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex">
                        <h2 className="text-lg font-bold">{card.Ticker}</h2>
                        {card.cardCheck && <img src={card.cardCheck} alt="" />}
                      </div>
                      {card.Change && (
                     <div class="flex items-center gap-1">
                         <span class={`${card.rotate ? 'text-red-500 rotate-180 text-sm font-bold' : 'text-green-500 text-sm font-bold'}`}> ▲ </span>
                        <span className={`${card.rotate ? 'text-red-500 text-sm font-bold' : 'text-green-500 text-sm font-bold'}`}>
                         {card.Change}
                        </span>
                     </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[13px] text-gray-600">Price</p>
                        <p className="text-sm font-semibold">{card.Price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[13px] text-gray-600">Market Cap</p>
                        <p className="text-sm text-start font-semibold">{card['Market Cap']}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
  );
}
