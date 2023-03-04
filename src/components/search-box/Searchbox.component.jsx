import './search-box.styles.css'
const Searchbox = ({ className, placeholder, onChangeHandler }) => {
  
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

/* export class Searchbox extends Component {
    render() {
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
}*/

export default Searchbox