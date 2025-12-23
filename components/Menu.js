
import React from "react";
import Link from "next/link";
import classes from "./Menu.module.css";
import BottomPage from "./BottomHalf";
import Drinks from "./Drinks";
import Food from "./Food";

function Menu() {
  return (
    <>
      <div className={classes.menuNavBar}>
        <nav>
          <ul className={classes.menuNavBar}>
            <li className={classes.menuNavItem}>
              <Link href="/Menu" className={classes.menuNav}>
                Menu
              </Link>
            </li>
            <li className={classes.menuNavItem}>
              <Link href="/Featured" className={classes.menuNav}>
                Featured
              </Link>
            </li>
            <li className={classes.menuNavItem}>
              <Link href="/Previous Orders" className={classes.menuNav}>
                Previous Orders
              </Link>
            </li>
            <li className={classes.menuNavItem}>
              <Link href="/Favourite Products" className={classes.menuNav}>
                Favourite Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.menuWithSideNav}>
        <nav>
          <Drinks />
          <Food />
          <section>
            <ul className={classes.sidebarList}>
              <li>
                <h4>At Home Coffee</h4>
                <Link href="/Whole Bean">Whole Bean</Link>
              </li>

              <li>
                <Link href="/VIA® Instant">VIA® Instant</Link>
              </li>
              <li>
                <Link href="/Shopping Bag">Shopping Bag</Link>
              </li>
            </ul>
          </section>
          <section>
            <ul className={classes.sidebarList}>
              <li>
                <h4>Merchandise</h4>
                <Link href="/Cold Cups">Cold Cups</Link>
              </li>
              <li>
                <Link href="/Tumblers">Tumblers</Link>
              </li>
              <li>
                <Link href="/Mugs">Mugs</Link>
              </li>
              <li>
                <Link href="/Water Bottles">Water Bottles</Link>
              </li>
              <li>
                <Link href="/Other">Other</Link>
              </li>
            </ul>
          </section>
          <section>
            <ul className={classes.sidebarList}>
              <li>
                <h4>Gift Cards</h4>
                <Link href="/Happy Birthday">Happy Birthday</Link>
              </li>
              <li>
                <Link href="Thank You">Thank You</Link>
              </li>
              <li>
                <Link href="/Traditional">Traditional</Link>
              </li>
            </ul>
          </section>
        </nav>
        <div className={classes.menuInnerSection}>
          <h4 className={classes.drinksArrayListContainer}>Menu</h4>
          <section id="drinks" className={classes.drinksArrayListContainer}>
            <h4 className={classes.drinksArrayListContainer}>Drinks</h4>
            <hr color="rgb(128, 128, 128" />
            <div className={classes.drinksArrayList}>
              <div className={classes.drinksArrayListItem}>
                <img src="./images/Hot-Coffees.webp"></img>
                <Link href="/drinks/hot-coffees">Hot Coffees</Link>
              </div>
              <div className={classes.drinksArrayListItem}>
                <img src="./images/Hot-Teas.webp"></img>
                <Link href="/drinks/hot-coffees">Hot Teas</Link>
              </div>
              <div className={classes.drinksArrayListItem}>
                <img src="./images/Hot-Drinks.webp"></img>
                <Link href="/drinks/hot-drinks">Hot Drinks</Link>
              </div>
              <div className={classes.drinksArrayListItem}>
                <img src="./images/Frappuccino.webp"></img>
                <Link href="/drinks/frappuccino-blended-beverages">
                  Frappuccino® Blended Beverage
                </Link>
              </div>
              <div className={classes.drinksArrayListItem}>
                <img src="./images/Cold-Coffees.webp"></img>
                <Link href="/drinks/cold-coffees">Coffees</Link>
              </div>
              <div className={classes.drinksArrayListItem}>
                <img src="./images/Iced-Teas.webp"></img>
                <Link href="/drinks/iced-teas">Iced Teas</Link>
              </div>
              <div className={classes.drinksArrayListItem}>
                <img src="./images/cold-drinks.webp"></img>
                <Link href="/drinks/cold-drinks">Cold Drinks</Link>
              </div>
              <div className={classes.drinksArrayListItem}>
                <img src="./images/bottledBeverage.webp"></img>
                <Link href="/drinks/bottledBeverage">Bottled Beverage</Link>
              </div>
            </div>
          </section>
          <section id="food" className={classes.foodsArrayListContainer}>
            <h4 className={classes.foodsArrayListContainer}>Food</h4>
            <hr color="rgb(128, 128, 128" />
            <div className={classes.foodsArrayList}>
              <div className={classes.foodsArrayListItem}>
                <img src="./images/Hot-Breakfast.webp" />
                <Link href="/food/Hot-Breakfast">Hot Breakfast</Link>
              </div>
              <div className={classes.foodsArrayListItem}>
                <img src="./images/Bakery.webp" />
                <Link href="/food/Bakery">Bakery </Link>
              </div>
              <div className={classes.foodsArrayListItem}>
                <img src="./images/Lunch.webp" />
                <Link href="/food/Lunch">Lunch</Link>
              </div>
              <div className={classes.foodsArrayListItem}>
                <img src="./images/Snacks-and-Sweets.webp" />
                <Link href="/food/Snacks-and-Sweets">Snacks & Sweets</Link>
              </div>
              <div className={classes.foodsArrayListItem}>
                <img src="./images/Oatmeal-and-Yoghurt.webp" />
                <Link href="/food/Oatmeal-and-Yoghurt">Oatmeal & Yoghurt</Link>
              </div>
            </div>
          </section>
          <section
            id="home-coffee"
            className={classes.homecoffeeArrayListContainer}
          >
            <h4 className={classes.homecoffeeArrayListContainer}>
              At Home Coffee
            </h4>
            <hr color="rgb(128, 128, 128)"></hr>
            <div className={classes.homecoffeeArrayList}>
              <div className={classes.homecoffeeArrayListItem}>
                <img src="./images/Whole-Bean.webp" />
                <Link href="images/Whole-Bean">Whole Bean</Link>
              </div>
              <div className={classes.homecoffeeArrayListItem}>
                <img src="./images/VIA-Instant.webp" />
                <Link href="images/VIA-Instant">VIA® Instant</Link>
              </div>
              <div className={classes.homecoffeeArrayListItem}>
                <img src="./images/SirenShopperBag.webp"></img>
                <Link href="images/SirenShopperBag">Shopping Bag</Link>
              </div>
            </div>
          </section>
          {/* <section
            id="mechandise"
            className={classes.merchandiseArrayListContainer}
          >
            <h4 className={classes.merchandiseArrayListContainer}>
              Merchandise
            </h4>
            <hr color="rgb(128, 128, 128" />
            <div className={classes.merchandiseArrayList}>
              <div className={classes.merchandiseArrayListItem}>
                <img src="./images/Cold-Cups.webp" />
                Cold Cups
              </div>
              <div className={classes.merchandiseArrayListItem}>
                <img src="./images/Tumblers.webp" />
                Tumblers
              </div>
              <div className={classes.merchandiseArrayListItem}>
                <img src="./images/Mugs.webp" />
                Mugs
              </div>
              <div className={classes.merchandiseArrayListItem}>
                <img src="./images/Water-Bottles.webp" />
                Water Bottles
              </div>
              <div className={classes.merchandiseArrayListItem}>
                <img src="./images/Other-merchandise.webp" />
                Other
              </div>
            </div>
          </section> */}
        </div>
      </div>

      <BottomPage />
    </>
  );
}

export default Menu;
