import React, { Component } from "react";
import "./cardlist.styles.css";
import Card from "../card/Card.component";
class Cardlist extends Component {
  render() {
    /* console.log("2.render in cardlist");
    console.log(this.props.monsters); */
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((m) => (
          <Card monsters={m} />
        ))}
      </div>
    );
  }
}

export default Cardlist;
