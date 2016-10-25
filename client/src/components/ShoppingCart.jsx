var React = require('react');

var ShoppingCart = React.createClass({
  viewCart: function(){

  },
  render: function(){
    return (
      <button id="cart" onClick={this.viewCart}>Cart</button>
    )
  }
});

module.exports = ShoppingCart;