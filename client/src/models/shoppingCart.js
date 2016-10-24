
var ShoppingCart = function(){
  // var self = this;
  this.cart = [];
};

ShoppingCart.prototype = {
  addItem: function(item){
    this.cart.push(item)
    console.log('added!',this.cart);
  },
  removeItem: function(item){
    var index = this.cart.indexOf(item);
    this.cart.splice(index,1);
    console.log(this.cart);
  },
  totalQuantity: function(){
    return this.cart.length;
  },
  totalPrice: function(){
    this.total = 0;
    for(var i = 0; i<this.cart.length; i++){
      this.total += this.cart[i].price;
    }
    return this.total;
  }
}
module.exports = ShoppingCart;