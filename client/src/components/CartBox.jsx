var React = require('react');
var ShoppingCart = require('./ShoppingCart.jsx');

var CartBox = React.createClass({
  render: function(){
    return (
        <div className="menu">
          <ShoppingCart shoppingCart={this.props.shoppingCart} removeItemFromCart={this.props.removeItemFromCart} totalPrice={this.props.totalPrice} checkVoucher={this.props.checkVoucher} />
        </div>
    )
  }
});

module.exports = CartBox;