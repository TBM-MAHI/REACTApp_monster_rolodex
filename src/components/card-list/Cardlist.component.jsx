import React, { Component } from "react";

export class Cardlist extends Component {
    render() {
        console.log("2.render in cardlist");
        console.log( this.props.monsters);
        const { monsters } = this.props;
        return (
          <div>
            {monsters.map((m) => (
              <h1 key={m.id}>{m.name} </h1>
            ))}
          </div>
        );
    }
}

export default Cardlist;
