import MealsSummary from "./MealsSummary";
import AvaibleMeals from "./AvaibleMeals";
import React, { Fragment } from "react";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvaibleMeals></AvaibleMeals>
    </Fragment>
  );
};

export default Meals;
