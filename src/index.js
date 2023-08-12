import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./index.scss";
import food_recipes from "./data/food_recipes";
import Food from "./pages/Food";
import { BrowserRouter } from "react-router-dom";

function Menu({ props }) {
  return (
    <>
      <Router>
        <li>
          <img src="https://www.iconpacks.net/icons/2/free-arrow-right-icon-2817-thumb.png" />
          <span>{props.title}</span>

          <Link to={"/" + props.id}>Show Recipe</Link>
        </li>
        <Routes>
          <Route path="/:id" element={<Food props={props} />} />
        </Routes>
      </Router>
    </>
  );
}

function CookBook() {
  return (
    <div className="card-hover">
      {/* TITLE */}
      <div className="card-hover__cookbook_title_wrapper">
        <img src="https://www.svgrepo.com/show/124022/cookbook.svg" />
        <span className="card-hover__cookbook_title">Livre De Cuisine</span>
        <p>
          "Cooking is not only an essential skill for nourishing our bodies but
          also a creative and therapeutic activity that deepens our connection
          with the food we eat."
        </p>
      </div>

      {/* CONTENT */}
      <div className="card-hover__content">
        {food_recipes.length > 0 ? (
          <ol>
            {food_recipes.map((food) => (
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CookBook />
  </React.StrictMode>
);
