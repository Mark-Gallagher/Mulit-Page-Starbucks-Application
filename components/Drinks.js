import React from "react";
import classes from "./Menu.module.css";
import Link from "next/link";

function Drinks() {
  return (
    <section>
      <ul className={classes.sidebarList}>
        <li>
          <h4>Drinks</h4>
          <Link href="/Hot Coffees">Hot Coffees</Link>
        </li>
        <li>
          <Link href="/Hot Tees">Hot Tees</Link>
        </li>
        <li>
          <Link href="/Hot Drinks">Hot Drinks</Link>
        </li>
        <li>
          <Link href="/Frappuccino Blended Beverages">
            Frappuccino® Blended Beverage
          </Link>
        </li>
        <li>
          <Link href="/Cold Coffees">Cold Coffees</Link>
        </li>
        <li>
          <Link href="/Iced Teas">Iced Teas</Link>
        </li>
        <li>
          <Link href="/Cold Drinks">Cold Drinks</Link>
        </li>
      </ul>
    </section>
  );
}

export default Drinks;
