import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const cards = [
  { img: "./images/HolidayWordmarkFY26.jpg" },
  { img: "./images/HelloKittyFY26.jpg" },
  { img: "./images/ColdSnowmanFY26.jpg" },
  { img: "./images/HolidayThankYouFY26.jpg" },
  { img: "./images/CupOfCheerFY26.jpg" },
  { img: "./images/HappyHolidaysFY26.jpg" },
  { img: "./images/HolidayYayFY26.jpg" },
  // { img: "./images/" },
];

export default function GiftCardCarousel() {
  return (
    <div className="bg-starbucksLightGreen py-10">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView="auto"
        className="px-6"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              height: "275px",
              width: "365px",
              borderRadius: "30px",
              gap: "9px"
            }}
            className="flex flex-col items-center transform transition duration 300 hover:-translate-y-2 "
          >
            <div
              className="bg-white w-full h-52 object-cover rounded-2xl shadow-lg 
            overflow-hidden"
             
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  height: "250px",
                  width: "365px",
                }}
              />
            </div>
            <p className="text-starbucksGreen font-semibold mt-3">
              {card.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
