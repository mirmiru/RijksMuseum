var React = require('react')
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var MenuCard = require('./menucard.jsx');
var Redux = require('redux');
var ReactRedux = require('react-redux');

var Order = require('./order.jsx');

var MENU_ID = 'fullmenu';
class Menu extends React.Component {
  render() {
    return <div>
      <h1>Welcome to the Museum Cafe</h1><br />
      <p>Nothing better than a cup of coffee after fine art. Place your order here and pick it up at the museum café after your tour.</p><br />
      {Object.values(this.props.menu).map((item, index) => {
      return <MenuCard key={index} color="lightgrey" colorL="#FFFFFF" item={item} name={item.name} image={item.id} />
      })}<br /><br />
      <Order>{Order}</Order>
      </div>;
  }
}
var ConnectedMenu = ReactRedux.connect(
  function(state) {
    return { menu: state.menu };
  },
  (dispatch) => {
    return {
      addMenu: function() {
        return dispatch({
          type: 'SET_MENU'
        })
      }
    };
  })(Menu);

module.exports = ConnectedMenu;
