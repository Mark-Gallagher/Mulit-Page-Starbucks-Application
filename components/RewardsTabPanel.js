import classes from "./Rewards.module.css";
import React from "react";
import { Tab } from "@headlessui/react";

function RewardsTabPage() {
 
  return (
    <>
      <Tab.Group defaultIndex={0}>
        <Tab.List>
          <div className={classes.rewardsMiddleSectionTwoContainerTwo}>
            <div className={classes.rewardsContainerTwoPadding}>
              <Tab className={classes.rewardsMiddleSectionTwoContainerTwo}>
                25
                <span className={classes.rewardsContainerTwoSymbol}>★</span>
              </Tab>
              <Tab className={classes.rewardsMiddleSectionTwoContainerTwo}>
                100
                <span className={classes.rewardsContainerTwoSymbol}>★</span>
              </Tab>
              <Tab className={classes.rewardsMiddleSectionTwoContainerTwo}>
                200
                <span className={classes.rewardsContainerTwoSymbol}>★</span>
              </Tab>
              <Tab className={classes.rewardsMiddleSectionTwoContainerTwo}>
                300
                <span className={classes.rewardsContainerTwoSymbol}>★</span>
              </Tab>
              <Tab className={classes.rewardsMiddleSectionTwoContainerTwo}>
                400
                <span className={classes.rewardsContainerTwoSymbol}>★</span>
              </Tab>
            </div>
          </div>
        </Tab.List>

        <div className={classes.rewardsContainerThree}>
          <div className={classes.rewardsContainerThreeInnerSection}>
            <div className={classes.rewardsContainerThreeInner}>
              <Tab.Panels>
                <Tab.Panel className={classes.sectionOneFlexContainer}>
                  {/* Default Tab*/}
                  <div className={classes.innerSectionOne}>
                    <div className={classes.innerSectionOneShadow} />
                    <img
                      src="./images/customizeDrink.webp"
                      className={classes.innerSectionOne}
                    />
                  </div>
                  <div className={classes.innerSectionTwo}>
                    <h3 className={classes.innerSectionTwo}>
                      Customize your Drink
                    </h3>
                    <span className={classes.innerSectionTwo}>
                      Make your drink just right with an extra espresso shot,
                      nondairy milk or a dash of your favorite syrup.
                    </span>
                  </div>
                </Tab.Panel>
                <Tab.Panel className={classes.sectionOneFlexContainer}>
                  {/* Second Option Tab*/}
                  <div className={classes.innerSectionOne}>
                    <div className={classes.innerSectionOneShadow} />
                    <img
                      src="./images/hot-or-iced-coffee.webp"
                      className={classes.innerSectionOne}
                    />
                  </div>
                  <div className={classes.innerSectionTwo}>
                    <h3 className={classes.innerSectionTwo}>
                      Brewed hot or iced coffee or tea, bakery item, packaged
                      snack and more
                    </h3>
                    <span className={classes.innerSectionTwo}>
                      Treat yourself to an iced coffee, buttery croissant, bag
                      of chips and more.
                    </span>
                  </div>
                </Tab.Panel>
                <Tab.Panel className={classes.sectionOneFlexContainer}>
                  {/* Third Option Tab*/}
                  <div className={classes.innerSectionOne}>
                    <div className={classes.innerSectionOneShadow} />
                    <img
                      src="./images/handcrafted-drink.webp"
                      className={classes.innerSectionOne}
                    />
                  </div>
                  <div className={classes.innerSectionTwo}>
                    <h3 className={classes.innerSectionTwo}>
                      Handcrafted drink (Cold Brew, lattes and more) or hot
                      breakfast
                    </h3>
                    <span className={classes.innerSectionTwo}>
                      Turn good mornings great with a delicious handcrafted
                      drink of your choice, breakfast sandwich or oatmeal on us.
                    </span>
                  </div>
                </Tab.Panel>
                <Tab.Panel className={classes.sectionOneFlexContainer}>
                  {/* Fourth Option Tab*/}
                  <div className={classes.innerSectionOne}>
                    <div className={classes.innerSectionOneShadow} />
                    <img
                      className={classes.innerSectionOne}
                      src="./images/sandwich-protein-box-or-at-home-coffee.webp"
                    />
                  </div>
                  <div className={classes.innerSectionTwo}>
                    <h3 className={classes.innerSectionTwo}>
                      Sandwich, protein box or at-home coffee
                    </h3>
                    <span className={classes.innerSectionTwo}>
                      Enjoy a PM pick-me-up with a lunch sandwich, protein box
                      or a bag of coffee—including Starbucks VIA Instant®.
                    </span>
                  </div>
                </Tab.Panel>
                <Tab.Panel className={classes.sectionOneFlexContainer}>
                  {/* Fifth Option Tab*/}
                  <div className={classes.innerSectionOne}>
                    <div className={classes.innerSectionOneShadow} />
                    <img
                      className={classes.innerSectionOne}
                      src="./images/select-starbucks®merchandise.webp"
                    />
                  </div>
                  <div className={classes.innerSectionTwo}>
                    <h3 className={classes.innerSectionTwo}>
                      Select Starbucks® merchandise
                    </h3>
                    <span className={classes.innerSectionTwo}>
                      Take home a signature cup, drink tumbler or your choice of
                      coffee merch up to $20.
                    </span>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </div>
        </div>
      </Tab.Group>
    </>
  );
}

export default RewardsTabPage;
