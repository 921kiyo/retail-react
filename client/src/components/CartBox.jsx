var React = require('react');
var ShoppingCart = require('./ShoppingCart.jsx');

var CartBox = React.createClass({
  // Sending information about cart items to ShoppingCart component where DOM in the cart is created
  render: function(){
    return (
        <div className="cart-list">
          <ShoppingCart shoppingCart={this.props.shoppingCart} removeItemFromCart={this.props.removeItemFromCart} totalPrice={this.props.totalPrice} checkVoucher={this.props.checkVoucher} />
        </div>
    )
  }
});

module.exports = CartBox;