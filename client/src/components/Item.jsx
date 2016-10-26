var React = require('react');

var ItemList = React.createClass({
  // Keep enabling add button until the stock hits 0
  checkStock: function(){
    return this.props.item.stock == 0;
  },
  addHandleClick: function(){
    this.props.addItemToCart(this.props.item);
  },
  render: function(){
    return(
      <li id="item-li">
        <img className="item-image" src={this.props.item.imgUrl} />
        <p><b>{this.props.item.name}</b></p>
        <p>Category: {this.props.item.category}</p>
        <p>Color: {this.props.item.color}</p>
        <p>Price: £{this.props.item.price}</p>
        <p>Stock: {this.props.item.stock} available</p>
        <button onClick={this.addHandleClick} disabled={this.checkStock()}>Add</button>
        <hr id="item-hr"/>
      </li>
    )
  }
});


module.exports = ItemList;