/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";
import React from "react";

export default function StarbucksCardScroller({ title, imageArray }) {
  const rowRef = useRef(null);

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mb-14">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-1">
        <h2 className="uppercase tracking-widest text-sm font-bold">{title}</h2>

        <button
          className="text-green-700 font-semibold hover:underline"
          style={{ fontSize: "16px" }}
        >
          See all
        </button>
      </div>

      {/* Card Row */}
      <div className="relative">
        {/* LEFT arrow */}
        <IconButton
          onClick={scrollLeft}
          className="!absolute left-2 top-1/2 -translate-y-1/2 
                     bg-white shadow-md z-20"
          size="small"
        >
          <ChevronLeft fontSize="small" />
        </IconButton>

        {/* Scroll Container */}
        <div
          ref={rowRef}
          className="
            flex overflow-x-auto scroll-smooth pr-12
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
          style={{gap: "18px"}}
        >
          {imageArray.map((item, index) => (
            <div
              key={index}
              className="
                w-[374.667px] h-[251px] flex-shrink-0 rounded-2xl 
                shadow-md overflow-hidden bg-white
                transform transition duration 300 hover:-translate-y-1
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover "
                style={{
                  borderRadius: "16px",
                  width: "1160px",
                  height: "255px",
                }}
              />
            </div>
          ))}
        </div>

        {/* RIGHT arrow */}
        <IconButton
          onClick={scrollRight}
          className="!absolute right-2 top-1/2 -translate-y-1/2
                     bg-white shadow-md z-20"
          size="small"
        >
          <ChevronRight fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
