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
    // Validating the voucher
    var voucherCode = document.getElementById('voucher-code').value;
    var result = this.props.checkVoucher(voucherCode);
  },
  render: function(){
    return (
      <div　id="cart-info">
        <div id="total-price-info">
          <h3>Total: £{this.props.totalPrice} </h3>
          <input id="voucher-code" type="text" placeholder="Voucher Code"/>
          <button id="voucher-button" onClick={this.applyVoucher}>Apply</button><br/>
          <span id="message"></span>
        </div>

        <div className="cart-item-list-div">
          {this.populateCartItemDOM()}
        </div>
      </div>
    )
  }
});

module.exports = ShoppingCart;