import React from "react";
import { ReactDOM } from "react";


function MainCard(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <a href="#" target="_blank">

        <button className="card__btn btn-lg active" >View  More</button>
        </a>
      </div>
    );
  }
  export default MainCard;
  