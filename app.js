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
  }

  render() {
    return (<li>{this.props.groceries}</li>);
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(groceries => <GroceryListItem groceries={groceries}/>)}
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));