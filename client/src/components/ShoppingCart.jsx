var React = require('react');
var CartItem = require('./CartItem.jsx');

var ShoppingCart = React.createClass({
  populateCartItemDOM: function(){
    var self = this;
    var items = this.props.shoppingCart.map(function(item, index){
      console.log('self is ',self);
      return(<CartItem item={item} key={index} removeItemFromCart={self.props.removeItemFromCart} />)
    });
    return items
  },
  render: function(){

    return (
      <div>
        <button id="cart">Cart</button>
        {this.populateCartItemDOM()}
      </div>
    )
  }
});

module.exports = ShoppingCart;