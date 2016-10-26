var React = require('react');
var Item = require('./Item.jsx');

var ItemList = React.createClass({
  // Sending item objects to Item component where DOM is created.
  populateItemDOM: function(){
    var self = this;
    var itemDOM = this.props.items.map(function(item, index){
      return(
        <Item item={item} key={index} addItemToCart={self.props.addItemToCart}/>
      )
    })
    return itemDOM
  },
  render: function(){
    return(
      <div className="main-display">
        <ul id="item-ul">
          {this.populateItemDOM()}
        </ul>
      </div>
    )
  }
});

module.exports = ItemList;