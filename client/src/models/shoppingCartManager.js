
var ShoppingCartManager = function(){
  // var self = this;
  this.cart = [];
};

ShoppingCartManager.prototype = {
  addItem: function(item){
    this.cart.push(item);
  },
  removeItem: function(item){
    var index = this.cart.indexOf(item);
    this.cart.splice(index,1);
    console.log(this.cart);
  },
  viewItems: function(){
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
module.exports = ShoppingCartManager;