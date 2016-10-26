var React = require('react');

var CartItem = React.createClass({
  removeHandleClick: function(){
    this.props.removeItemFromCart(this.props.item)
  },
  render: function(){
    return(
      <li id="cart-item-li">
        <p>{this.props.item.name}</p>
        <p>Color: {this.props.item.color}</p>
        <p>Price: £{this.props.item.price}</p>
        <button onClick={this.removeHandleClick}>X</button><hr/>
      </li>
    )
  }
});

module.exports = CartItem;