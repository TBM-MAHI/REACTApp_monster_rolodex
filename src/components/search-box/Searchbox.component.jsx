import React, { Component } from 'react'
import './search-box.styles.css'
export class Searchbox extends Component {
    render() {
      console.log('render searchbox');
      console.log(this.props);
      return (
        <div>
          <input
            className={`search-box ${this.props.className}`}
            type="search"
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
          />
        </div>
      );
  }
}

export default Searchbox