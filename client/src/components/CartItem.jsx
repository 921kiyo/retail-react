var React = require('react');

var CartItem = React.createClass({
  removeHandleClick: function(){
    this.props.removeItemFromCart(this.props.item)
  },
  render: function(){
    return(
      <li>
        <p>{this.props.item.name}</p>
        <button onClick={this.removeHandleClick}>X</button>
      </li>
    )
  }
});

module.exports = CartItem;