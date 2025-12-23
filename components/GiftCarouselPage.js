import React from 'react'


// const imageData = [
  // { img: "./images/HolidayWordmarkFY26.jpg" },
  // { img: "./images/HelloKittyFY26.jpg" },
  // { img: "./images/ColdSnowmanFY26.jpg" },
  // { img: "./images/HolidayThankYouFY26.jpg" },
  // { img: "./images/CupOfCheerFY26.jpg" },
  // { img: "./images/HappyHolidaysFY26.jpg" },
  // { img: "./images/HolidayYayFY26.jpg" },
// ];

export default function GiftCarouselPage() {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <img
          src="./images/HolidayWordmarkFY26.jpg"
          className="rounded-lg object-scale-down"
        />
        <img
          src="./images/HelloKittyFY26.jpg"
          className="rounded-lg object-scale-down"
        />
        <img
          src="images/ColdSnowmanFY26.jpg"
          className="rounded-lg object-scale-down"
        />
        <img
          src="images/HolidayThankYouFY26.jpg"
          className="rounded-lg object-scale-down"
        />
        <img
          src="/images/CupOfCheerFY26.jpg"
          className="rounded-lg object-scale-down"
        />
        <img
          src="./images/HappyHolidaysFY26.jpg"
          className="rounded-lg object-scale-down"
        />
        <img
          src="./images/HolidayYayFY26.jpg"
          className="rounded-lg object-scale-down"
        />
      </div>
    );
}


