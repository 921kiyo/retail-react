var React = require('react');
var CartItem = require('./CartItem.jsx');

var ShoppingCart = React.createClass({
  populateCartItemDOM: function(){
    var self = this;
    var items = this.props.shoppingCart.map(function(item, index){
      return(<CartItem item={item} key={index} removeItemFromCart={self.props.removeItemFromCart} />)
    });
    return items
  },
  applyVoucher: function(){
    var voucher = document.getElementById('voucherCode').value;
    this.props.checkVoucher(voucher);
  },
  render: function(){
    return (
      <div　id="cart-info">
        <p>Total: {this.props.totalPrice} </p>
        <input id="voucherCode" type="text" placeholder="voucher keywords"/>
        <button onClick={this.applyVoucher}>Apply</button>
        <div className="cart-item-list-div">
          {this.populateCartItemDOM()}
        </div>
      </div>
    )
  }
});

module.exports = ShoppingCart;