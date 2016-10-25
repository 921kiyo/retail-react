var React = require('react');

var ItemList = React.createClass({
  handleClick: function(){
    this.props.addItemToCart(this.props.item);
  },
  render: function(){
    return(
      <li>
        <img className="item-image" src={this.props.item.imgUrl} />
        <p>Name: {this.props.item.name}</p>
        <p>Color: {this.props.item.color}</p>
        <p>Price: £{this.props.item.price}</p>
        <p>Stock: {this.props.item.stock} available</p>
        <button onClick={this.handleClick}>Add</button>
      </li>
    )
  }
});


module.exports = ItemList;