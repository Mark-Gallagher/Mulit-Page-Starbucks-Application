import React from "react";
import classes from "../styles/Featured.module.css";
//import { Container } from "@mui/material";
import { useEffect } from "react";

function Features() {
  //console.log("Rendering Features component");

  useEffect(() => {
    console.log("Running on the client only.");
  }, []);

  return (
    // <Container>
    <div className={classes.mainDiv}>
      <div className={classes.greenContainer}>
        <div className={classes.greenContainerInner}>
          <h3>Start fresh with Starbucks® Rewards</h3>
          <div className={classes.greenContainerL}>
            <a className={classes.greenContainerLink} href="/JoinNow">
              Join
            </a>
            today to earn your way to free coffee and treats.
          </div>
        </div>
      </div>
      <div className={classes.drinkContainerOne}>
        <div className={classes.drinkContainerInnerOne}>
          <div className={classes.drinkContainerRightItemOne}>
            <img
              className={classes.drinkContainerImgOne}
              src="./images/Pistachio-Cream-Coffee.webp"
              alt="smooth coffee topped with pistachio cream cold foam."
            ></img>
          </div>
          <div className={classes.drinkContainerLeftItemOne}>
            <div className={classes.drinkContainerLeftInner}>
              <h2 className={classes.drinkContainerHeader}>
                New year, Cool <br></br>new brew
              </h2>
              <br></br>
              <div className={classes.drinkContainerLineOne}>
                Introducing Pistachio Cream Cold Brew — bold, smooth coffee
                topped with pistachio cream cold foam.
              </div>
              <a
                href="https://www.starbucks.com/menu/product/2123702/iced"
                className={classes.drinkContainerbutton}
              >
                Try it now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.drinkContainerTwo}>
        <div className={classes.drinkContainerInnerTwo}>
          <div className={classes.drinkContainerLeftItemTwo}>
            <img
              className={classes.drinkContainerImgtwo}
              src="./images/Pistachio-Latte.webp"
              alt="Our creamy Pistachio Frappuccino® blended beverage satisfies all your winter cravings."
            ></img>
          </div>
          <div className={classes.drinkContainerRightItemTwo}>
            <div className={classes.drinkContainerRightInner}>
              <h2 className={classes.drinkContainerHeaderTwo}>
                Long walks with pistachio
              </h2>
              <br></br>
              <div className={classes.drinkContainerLineTwo}>
                Keep it cozy with a Pistachio Latte finished with a
                brown-buttery topping.
              </div>
              <a
                href="https://www.starbucks.com/menu/product/2123364/iced"
                className={classes.drinkContainerbuttonTwo}
              >
                Order now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.drinkContainerThree}>
        <div className={classes.drinkContainerInnerThree}>
          <div className={classes.drinkContainerRightItemThree}>
            <img
              className={classes.drinkContainerImgThree}
              src="./images/Tribute-Blend.webp"
              alt="Exceptional coffees unite in Starbucks Tribute Blend® showcasing four of our favorite origins."
            ></img>
          </div>
          <div className={classes.drinkContainerLeftItemThree}>
            <div className={classes.drinkContainerLeftInnerThree}>
              <h2 className={classes.drinkContainerHeaderThree}>
                Taste of the globe
              </h2>
              <div className={classes.drinkContainerLineThree}>
                Exceptional coffees unite in Starbucks Tribute Blend® showcasing
                four of our favorite origins.
              </div>
              <a
                href="https://www.starbucks.com/menu/product/792/whole-bean"
                className={classes.drinkContainerbuttonThree}
              >
                Order now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.drinkContainerFour}>
        <div className={classes.drinkContainerInnerFour}>
          <div className={classes.drinkContainerLeftItemFour}>
            <img
              className={classes.drinkContainerImgFour}
              src="./images/Gift-Card.jpg"
              alt="Share your appreciation for the people in your life with a gift card."
            />
          </div>
          <div className={classes.drinkContainerRightItemFour}>
            <div className={classes.drinkContainerRightInnerFour}>
              <h2 className={classes.drinkContainerHeaderFour}>
                Gratitude by the cup
              </h2>
              <div className={classes.drinkContainerLineFour}>
                Exceptional coffees unite in Starbucks Tribute Blend® showcasing
                four of our favorite origins.
              </div>
              <a
                href="https://www.starbucks.com/gift"
                className={classes.drinkContainerbuttonFour}
              >
                Send an eGift
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Container>
  );
}

export default Features;
