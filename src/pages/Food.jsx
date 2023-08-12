import React from "react";

function Steps() {
  return (
    <h3 className="card-hover__title">
      Make your <span>choice</span> right now!
    </h3>
  );
}

function Food({ props }) {
  return (
    <>
      <Steps />
      <p className="card-hover__text">{props.ingredients}</p>
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

export default Food;
