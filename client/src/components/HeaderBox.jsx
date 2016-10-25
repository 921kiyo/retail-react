var React = require('react');

var ShoppingCart = require('./ShoppingCart.jsx');

var HeaderBox = React.createClass({

  render: function(){
    return (
      <div className="box header">
        <div id="nav-menu">
          <span id='menu-button'><i class="fa fa-bars" aria-hidden="true"></i></span>
        </div>
          <ShoppingCart shoppingCart={this.props.shoppingCart} removeItemFromCart={this.props.removeItemFromCart}/>
      </div>
    )
  }
});

module.exports = HeaderBox;