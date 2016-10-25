
var ShoppingCartManager = function(){
  this.cart = [];
  this.totalPrice = 0;
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
  checkVoucher: function(voucher){
    if(voucher == "voucher" && this.totalPrice != 0){
      if(this.isFootwearIncluded() && this.totalPrice >= 75){
        this.totalPrice -= 15;
      }
      else if (this.totalPrice >= 50){
        this.totalPrice -= 10;
      }
      else {
        this.totalPrice -= 5;
      }
    }
  },
  isFootwearIncluded: function(){
    for(var i = 0; i<this.cart.length; i++){
      if (this.cart[i].category.includes('Women’s Footwear') || this.cart[i].category.includes('Men’s Footwear')){
        console.log(true);
        return true
      }
    }
    console.log(false);
    return false
  },
  totalQuantity: function(){
    return this.cart.length;
  },
  calculateTotalPrice: function(){
    for(var i = 0; i<this.cart.length; i++){
      this.totalPrice += this.cart[i].price;
    }
    return this.totalPrice;
  }
}
module.exports = ShoppingCartManager;