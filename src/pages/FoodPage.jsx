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
  return (
    <div className="card-hover">
      <Food props={food} />
    </div>
  );
}

export default FoodPage;
