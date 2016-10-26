var React = require('react');

var CartItem = React.createClass({
  removeHandleClick: function(){
    this.props.removeItemFromCart(this.props.item)
  },
  render: function(){
    return(
      <li id="cart-item-li">
        <div id="cart-item-div">
          <p className="cart-item-name">{this.props.item.name}</p>
          <p className="cart-item-color">{this.props.item.color}</p>
          <p className="cart-item-price">Price: £{this.props.item.price}</p>
          <button className="remove-button" onClick={this.removeHandleClick}>X</button>
        </div><hr/>
      </li>
    )
  }
});

module.exports = CartItem;