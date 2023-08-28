import { useState } from "react";
import { Link } from "react-router-dom";
import previous from "../assets/previous.png";

function Steps({ step, index }) {
  return (
    <li
      className={`food-card__steps_circle ${
        step === index ? "active" : "inactive"
      } `}
    >
      {index + 1}
    </li>
  );
}

function Food({ props }) {
  const [step, setStep] = useState(0);

  return (
    <div className="food-card">
      <Link to={"/"}>
        <img
          className="food-card__previous_page"
          src={previous}
          alt="previous"
        />
      </Link>

      <h3 className="food-card__title">{props.title}</h3>
      <ul className="food-card__steps">
        {Array.from({ length: props.directions.length }, (_, index) => (
          <Steps step={step} index={index} key={index} />
        ))}
      </ul>
      <div className="food-card__directions">
        <p className="food-card__text">{props.directions[step]}</p>
      </div>
      <div className="food-card__buttons">
        {step !== 0 ? (
          <button
            className="previous round"
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Previous
          </button>
        ) : null}

        {step !== props.directions.length - 1 ? (
          <button
            className="next round"
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Next
          </button>
        ) : null}
      </div>
      <div className="food-card__ingredients">
        <h2>Ingredients</h2>
        <ul>
          {props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="food-card__text"></p>
      </div>
    </div>
  );
}

export default Food;
