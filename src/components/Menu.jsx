import React from "react";
import { Link } from "react-router-dom";

export function Menu({ props }) {
  return (
    <>
      <li>
        <img
          src="https://www.iconpacks.net/icons/2/free-arrow-right-icon-2817-thumb.png"
          alt={props.title}
        />
        <span>{props.title}</span>

        <Link to={"/" + props.id}>Show Recipe</Link>
      </li>
    </>
  );
}
