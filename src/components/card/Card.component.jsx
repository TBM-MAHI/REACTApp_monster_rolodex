import React, { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    console.log("Card render");
    console.log(this.props);
    let { name, id, email } = this.props.monsters;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2?size=200x200`}
          alt={`rob${id}`}
        />
        <h2>{name} </h2>
        <p>{email} </p>
      </div>
    );
  }
}

export default Card;
