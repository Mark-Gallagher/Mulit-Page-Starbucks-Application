import React, { useRef } from "react";
import classes from "./GiftCards.module.css";
import styles from "./GiftCards.module.css";
import Link from "next/link";
import GiftCardCarousel from "./GiftCardCarousel";
import GiftCardInfoBar from "./GiftCardInfoBar";
// import CheckBalanceButton from "./CheckBalanceButton";
import CheckBalanceModal from "./CheckBalanceModal";
import BottomPage from "./BottomHalf";
import { IconButton, ImageList, ImageListItem } from "@mui/material";
import StarbucksCardScroller from "./StarbucksCardScroller";

// import { Card, Grid, Image } from "@geist-ui/core";

// const imageArray = [
//   { img: "./images/HappyHolidaysFY26.jpg" },
//   { img: "./images/ColdSnowmanFY26.jpg" },
//   { img: "./images/HappyHolidaysRibbonFY26.jpg" },
//   { img: "./images/HotCocoaFY26.jpg" },
//   { img: "./images/FaLaLaFY26.jpg" },
// ];

const imageArrayTwo = [
  { img: "./images/HolidayThankYouFY26.jpg" },
  { img: "./images/ThankYouRibbonFY26.jpg" },
  { img: "./images/BigThankYouFY22.jpg" },
];

const imageArrayThree = [
  { img: "./images/HolidayYayFY26.jpg" },
  { img: "./images/CelebrationCheersFY25.png" },
  { img: "./images/CelebrateCoffeeFY25.png" },
];

// const imageArrayFour = [
//   { img: "./images/HolidayYayFY26.jpg" },
//   { img: "./images/CelebrationCheersFY25.png" },
//   { img: "./images/CelebrateCoffeeFY25.png" },
// ];

function GiftCards() {
  const rowRef = useRef(null);

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <>
      <main>
        <div className={classes.sectionOne}>
          <div className={classes.pageTitleArea}>
            <div className={classes.pageTitleItems}>
              <h1 className={classes.pageTitle}>Gift Cards</h1>
            </div>
            <div className={classes.pageTitleItems} />
          </div>
          <div className={classes.sliderContainerOne}>
            <div className={classes.containerOnePadding}>
              <div className={classes.featuredNavBar}>
                <h2 className={classes.sliderTitle}>Featured</h2>
                <span></span>
                <Link
                  //styling using multiple css classes
                  className={` ${styles.featuredButton} ${styles.featuredButtonText}`}
                  type="button"
                  href="/GiftCardCarousel"
                >
                  See all
                </Link>
              </div>
              <div>
                <GiftCardCarousel title="Gift Cards" />
              </div>
            </div>
            <div>
              <GiftCardInfoBar />
            </div>
            <div className={classes.greenContainer}>
              <div className={classes.greenContainerContent}>
                <div className={classes.containerContentInner}>
                  <h2>Receive a gift card?</h2>
                  <div className={classes.contentInnerFlex}>
                    <div className={classes.innerFlexItem}>Earns 2★ per$1</div>
                    <div className={classes.buttonOneSpace} />
                    <Link className={classes.buttonOne} href="/account/cards">
                      Add or Reload
                    </Link>
                    <div className={classes.buttonOneSpace} />
                    <button className={classes.buttonTwo}>
                      Check Balance
                      <CheckBalanceModal />
                    </button>
                  </div>
                </div>
                <div className={classes.termsConditionsLine}>
                  <Link
                    className={classes.termsConditionsStyling}
                    href="/terms/manage-gift-cards"
                  >
                    Cards Terms & Conditions
                    <svg className={classes.termsConditionsStyling}>
                      <path
                        d="M14.5003 3.30018C14.0861 3.30021 13.7503 3.63602 13.7504 
                              4.05024C13.7504 4.46445 14.0862 4.80021 14.5004 4.80018L17.7958
                              4.79994L11.2981 11.2976C11.0052 11.5905 11.0052 12.0654 11.2981
                              12.3583C11.591 12.6512 12.0659 12.6512 12.3588 12.3583L18.8566
                              5.86046V8.99966C18.8566 9.41388 19.1924 9.74966 19.6066 9.74966C20.0208
                              9.74966 20.3566 9.41388 20.3566 8.99966V4.0498C20.3566 3.85088 20.2776
                              3.66011 20.1369 3.51945C19.9963 3.3788 19.8055 3.29979 19.6065 3.2998L14.5003
                              3.30018Z"
                      />
                      <path
                        d="M6 3.99966H12V5.49966H6C5.72386 5.49966 5.5 5.72352 5.5 
                              5.99966V17.9997C5.5 18.2758 5.72386 18.4997 6 18.4997H18C18.2761
                              18.4997 18.5 18.2758 18.5 17.9997V11.2497H20V17.9997C20 19.1042
                              19.1046 19.9997 18 19.9997H6C4.89543 19.9997 4 19.1042 4 17.9997V5.99966C4
                              4.89509 4.89543 3.99966 6 3.99966Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.sliderContainerTwo}>
            <div className={classes.gridContainer}>
              <StarbucksCardScroller
                title="Holiday"
                imageArray={[
                  { img: "./images/HappyHolidaysFY26.jpg" },
                  { img: "./images/ColdSnowmanFY26.jpg" },
                  { img: "./images/HappyHolidaysRibbonFY26.jpg" },
                  { img: "./images/HotCocoaFY26.jpg" },
                  { img: "./images/FaLaLaFY26.jpg" },
                ]}
              />
            </div>
            <div className={classes.containerTwoPadding}>
              <h2 className={classes.containerTwoTitle}>Thank You</h2>
            </div>
            <div className={classes.gridContainer}>
              <IconButton
                onClick={scrollRight}
                className="!absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md"
                size="small"
              />
              {/*Card Container Two */}
              <ImageList
                ref={rowRef}
                cols={3}
                style={{
                  overflow: "hidden", // disables all scroll
                  width: "1160px",
                  height: "255px",
                  gap: "18px",
                }}
              >
                {imageArrayTwo.map((item) => (
                  <ImageListItem
                    key={item.img}
                    className="transform transition duration 300 hover:-translate-y-1 "
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      style={{ borderRadius: "16px" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
            <div className={classes.containerTwoPadding}>
              <h2 className={classes.containerTwoTitle}>Celebration</h2>
            </div>
            <div className={classes.gridContainer}>
              {/*Card Container Three */}
              <ImageList
                cols={3}
                style={{
                  overflow: "hidden", // disables all scroll
                  width: "1160px",
                  height: "255px",
                  gap: "18px",
                }}
              >
                {imageArrayThree.map((item) => (
                  <ImageListItem
                    key={item.img}
                    className="transform transition duration 300 hover:-translate-y-1 "
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      style={{ borderRadius: "16px", position: "relative" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
        </div>
      </main>
      <BottomPage />
    </>
  );
}

export default GiftCards;
