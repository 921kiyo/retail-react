var React = require('react');

var ShoppingCart = require('./ShoppingCart.jsx');

var HeaderBox = React.createClass({

  render: function(){
    return (
      <div className="box header">
        <div id="nav-menu">
          <i className="fa fa-bars" aria-hidden="true" onClick={this.props.openCart}></i>
        </div>
          <ShoppingCart shoppingCart={this.props.shoppingCart} removeItemFromCart={this.props.removeItemFromCart} totalPrice={this.props.totalPrice} checkVoucher={this.props.checkVoucher} />
      </div>
    )
  }
});

module.exports = HeaderBox;