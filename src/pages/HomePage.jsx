import React from "react";
import foodRecipes from "../data/foodRecipes";
import { Menu } from "../components/Menu";

export function HomePage() {
  return (
    <div className="menu-card">
      {/* TITLE */}
      <div className="menu-card__cookbook_title_wrapper">
        <img src="https://www.svgrepo.com/show/124022/cookbook.svg" />
        <span className="menu-card__cookbook_title">Livre De Cuisine</span>
        <p>
          "Cooking is not only an essential skill for nourishing our bodies but
          also a creative and therapeutic activity that deepens our connection
          with the food we eat."
        </p>
      </div>
      {/* CONTENT */}
      <div className="menu-card__content">
        {foodRecipes.length > 0 ? (
          <ol>
            {foodRecipes.map((food) => (
              <Menu props={food} key={food.title} />
            ))}
          </ol>
        ) : (
          <span>
            Sorry to inform you but we don't have any recipes prepared for you.
          </span>
        )}
      </div>
    </div>
  );
}
