// TODO
var App = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryList groceries={['milk', 'cereal', 'eggs', 'cheese', 'bread', 'potatoes']}/>
  </div>
);

// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//   return (<ul>
//     <li onClick={onListItemClick}>{props.groceries[0]}</li>
//     <li>{props.groceries[1]}</li>
//     <li>{props.groceries[2]}</li>
//     <li>{props.groceries[3]}</li>
//   </ul>
//   );
// };

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }


  render() {
    var style = {textDecoration: this.state.done ? 'line-through' : 'none'};
    var style2 = {fontWeight: this.state.done ? 'Bold' : 'normal'};

    // return (<li style={style2} onClick={this.onListItemClick.bind(this)}>{this.props.groceries}</li>);

    return (<li style={style2} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.groceries}</li>);

  }

}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(groceries => <GroceryListItem groceries={groceries}/>)}
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));