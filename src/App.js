import React from 'react';

import './App.css';


class App extends React.Component {
  constructor() {
    console.log("1.constructor");
    super();
    this.state = {
      monsters: [],
      searchbox: "",
    };
  }

  componentDidMount() {
    console.log("3.componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(
          () => {
            return { monsters: user };
          },
          () => {
            //return console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("2.render");
    const filteredMonsters = this.state.monsters.filter((m) =>
      m.name.toLowerCase().includes(this.state.searchbox)
    );
    return (

      <div className="App">
        <input
          className="seearch-box"
          type="search"
          placeholder="search..."
          onChange={(event) => {
            let searchString = event.target.value.toLowerCase();
            console.log(searchString);
           this.setState(() => {
              return { searchbox: searchString };
            })
          }}
        />
        { 
          filteredMonsters.map((m) => <h1 key={m.id}>{m.name}</h1>)
          
        }
      </div>
    );
  }
}

export default App;
