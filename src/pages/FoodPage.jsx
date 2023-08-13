import React from "react";
import { useParams } from "react-router-dom";
import Food from "../components/Food";
import foodRecipes from "../data/foodRecipes";

const findFoodId = (id) => {
  return foodRecipes.find((food) => food.id === parseInt(id));
};

function FoodPage() {
  const { foodId } = useParams();
  const food = findFoodId(foodId);
  return <Food props={food} />;
}

export default FoodPage;
