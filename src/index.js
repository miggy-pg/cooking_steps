import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import food_recipes from "./data/food_recipes";

function Steps() {
  return (
    <h3 className="card-hover__title">
      Make your <span>choice</span> right now!
    </h3>
  );
}

function Food() {
  return (
    <>
      <Steps />
      <p className="card-hover__text">
        Lorem ipsum, dolor sit amet cssonsectetur adipisicing elit. Officia
        quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla
        a aut?
      </p>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div className="card-hover__buttons">
        <button href="#" className="previous round">
          Previous
        </button>
        <button className="next round">Next</button>
      </div>
    </>
  );
}

function Menu({ name }) {
  return (
    <>
      <li>
        <img src="https://www.iconpacks.net/icons/2/free-arrow-right-icon-2817-thumb.png" />
        <span>{name}</span>
        <button onClick={""}>Show Recipe</button>
      </li>
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
              <Menu name={food.title} key={food.title} />
            ))}
          </ol>
        ) : (
          <span>
            Sorry to inform you but we don't have any recipes prepared for you.
          </span>
        )}

        {/* <Food />
        <Buttons /> */}
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
