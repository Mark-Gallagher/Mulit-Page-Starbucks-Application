import React from "react";
import classes from "./Menu.module.css";
import Link from "next/link";

function Food() {
  return (
    <section>
      <ul className={classes.sidebarList}>
        <li>
          <h4>Food</h4>
          <Link href="/Hot Breakfast">Hot Breakfast</Link>
        </li>
        <li>
          <Link href="/Bakery">Bakery</Link>
        </li>
        <li>
          <Link href="/Lunch">Lunch</Link>
        </li>
        <li>
          <Link href="/Snacks and Sweets">Snacks and Sweets</Link>
        </li>
        <li>
          <Link href="/Oatmeal and Yoghurt">Oatmeal and Yoghurt</Link>
        </li>
      </ul>
    </section>
  );
}

export default Food;
