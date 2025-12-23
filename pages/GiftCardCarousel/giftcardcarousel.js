import GiftCarouselPage from "@/components/GiftCarouselPage";
import styles from "./layout.module.css";
import React from "react";

export default function GiftCardCarousel(children) {
  return (
    <>
      <div className={styles.container}>
        <GiftCarouselPage />
        {children}
      </div>
    </>
  );
}
