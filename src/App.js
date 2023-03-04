import React from 'react';
import './App.css';
import Cardlist from './components/card-list/Cardlist.component';
import Searchbox from './components/search-box/Searchbox.component';
class App extends React.Component {
  constructor() {
    console.log("1.constructor in app");
    super();
    this.state = {
      monsters: [],
      searchbox: "",
    };
  }

  componentDidMount() {
    console.log("3.componentDidMount in app");
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
  serachOnChange = (e) => {
    let searchString = e.target.value.toLowerCase();
    console.log(searchString);
    this.setState(() => {
      return { searchbox: searchString };
    });
  }
  render() {
    console.log("2.render in app");
    let { monsters, searchbox } = this.state;
    let { serachOnChange } = this;
    // console.log(serachOnChange);
    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchbox)
    );
    
    return (
      <div>
        <h1 className='app-title'> Monster Rolodex</h1>
        <Searchbox
          className="monster-search-box"
          onChangeHandler={serachOnChange}
          placeholder="search monster"
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}
  
export default App;

          
       
      

