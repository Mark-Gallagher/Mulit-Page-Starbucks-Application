import React, { useEffect } from "react";
import classes from "./MainNavigation.module.css";
import { BottomNavigation} from "@mui/material";
import Link from "next/link";
//import { useEffect, useState } from "react";

function BottomPage() {
  useEffect(() => {
    console.log("Running on the client only.");
  }, []);

  return (
    <>
      <BottomNavigation>
        <footer>
          <div className={classes.linkDivFlex}>
            <div>
              <ul>
                <h2>About Us</h2>
                <li>
                  <Link href="https://www.starbucks.com/about-us/">Our Company</Link>
                </li>
                <li>
                  <Link href="https://www.starbucks.com/coffee/">Our Coffee</Link>
                </li>
                <li>
                  <Link href="https://stories.starbucks.com/">About Starbucks </Link>
                </li>
                <li>
                  <Link href="https://archive.starbucks.com/">Starbucks Archive</Link>
                </li>
                <li>
                  <Link href="https://investor.starbucks.com/ir-home/default.aspx">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="https://customerservice.starbucks.com/">
                    Customer Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className={classes.linkDivFlexSpacing}>
                <h5> Careers</h5>
                <li>
                  <Link href="https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/">
                    Culture and Values
                  </Link>
                </li>
                <li>
                  <Link href="https://stories.starbucks.com/stories/inclusion-diversity/">
                    Inclusion,Diversity and Equity
                  </Link>
                </li>
                <li>
                  <Link href="https://www.starbucks.com/careers/working-at-starbucks/education/">
                    College Achievement Plan
                  </Link>
                </li>
                <li>
                  <Link href="https://alumni.starbucks.com/login/">
                    Alumni Community
                  </Link>
                </li>
                <li>
                  <Link href="https://www.starbucks.com/careers/"> U.S. Careers</Link>
                </li>
                <li>
                  <Link href="https://www.starbucks.com/careers/international-careers/">
                    International Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className={classes.linkDivFlexSpacing}>
                <h5>Social Impact</h5>
                <li>
                  <Link href="https://www.starbucks.com/responsibility/people/">
                    People
                  </Link>
                </li>
                <li>
                  <Link href="https://www.starbucks.com/responsibility/planet/">
                    Planet
                  </Link>
                </li>
                <li>
                  <Link href="https://www.starbucks.com/responsibility/reporting-hub/">
                    Environmental and Social<br></br> Impact Reporting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className={classes.linkDivFlexSpacing}>
                <h5>For Business Partners</h5>
                <li>
                  <Link href="https://www.starbucks.com/business/landlord-faq/">
                    Landlord Support Center
                  </Link>
                </li>
                <li>
                  <Link href="https://www.starbucks.com/business/suppliers/">
                    Suppliers
                  </Link>
                </li>
                <li>
                  <Link href="https://www.starbuckscardb2b.com/s/">
                    Corporate Gift Card Sales
                  </Link>
                </li>
                <li>
                  <Link href="https://www.nestlecoffeepartnerssl.com/our-brands/we-proudly-serve-starbucks-coffee-program">
                    Office and Foodservice <br></br> Coffee
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className={classes.linkDivFlexSpacing}>
                <h5>Order and Pickup</h5>
                <li>
                  <Link href="/MobileApps">Order on the app</Link>
                </li>
                <li>
                  <Link href="/Menu">Order on the web</Link>
                </li>
                <li>
                  <Link href="/Delivery">Delivery</Link>
                </li>
                <li>
                  <Link href="/Order&Pickup">Order and Pickup Options</Link>
                </li>
                <li>
                  <Link href="/ExploreCoffee">
                    Explore and Find Coffee <br></br>for Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.divider} />

          <div className={classes.footerContainer}>
            <div>
              <ul className={classes.social}>
                <li>
                  <Link href="https://spotify.com">
                    <img src="./images/social-spotify.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com">
                    <img src="./images/social-facebook.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="https://pinterest.com">
                    <img src="./images/social-pinterest.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com">
                    <img src="./images/social-instagram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com">
                    <img src="./images/social-youtube.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com">
                    <img src="./images/social-twitter.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.rowContainer}>
            <ul className={classes.footerContainer}>
              <li>
                <Link href="https://starbucks.com/terms/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://starbucks.com/terms/starbucks-terms-of-use">
                  <span aria-hidden="true"> | </span>
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43">
                  <span aria-hidden="true"> | </span>
                  CA Supply Chain Act
                </Link>
              </li>
              <li>
                <Link href="">
                  <span aria-hidden="true"> | </span>
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.footerP}>
            © 2025 Starbucks Coffee Company. All rights reserved.
          </div>
        </footer>
      </BottomNavigation>
    </>
  );
}
export default BottomPage;
