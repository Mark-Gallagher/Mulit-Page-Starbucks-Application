import React from "react";
import { Box, Typography } from "@mui/material";
import classes from "./GiftCards.module.css";

export default function GiftCardInfoBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
        backgroundColor: "#f7f7f7", // light grey tone
        borderRadius: "12px",
        padding: "12px 110px",
        marginY: 3,
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      }}
    >
      <img
        alt="Avatar"
        className={classes.avatar}
        src="./avatars/group-gift-cards.png"
        style={{  borderRadius: "50%" }}
      />
      <Typography
        variant="body2"
        sx={{
          color: "#1e3932", // Starbucks greenish-black text
          fontWeight: 500,
          padding: "20px 10px"
        }}
      >
        Effortlessly send up to 10 eGifts per purchase. Select a design to
        start!
      </Typography>
    </Box>
  );
}
