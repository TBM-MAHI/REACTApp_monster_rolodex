import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstName:'MAHI',
        lastName:'ooooo',
      },
      company:'ZTM'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi I'm {this.state.name.firstName} {this.state.name.lastName} i WORK AT {this.state.company}
          </p>
          <button onClick={() => {
            this.setState(
              () => {
                return {
                  name: { firstName: "becky", lastName: "lynch" },
                  company: "wwe",
                };
              }
            )
          }
        }>
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
