
var ShoppingCartManager = function(){
  this.cart = [];
  this.totalPrice = 0;
  this.isVoucherUsed = false;
};

ShoppingCartManager.prototype = {
  addItem: function(item){
    this.cart.push(item);
  },
  removeItem: function(item){
    var index = this.cart.indexOf(item);
    this.cart.splice(index,1);
  },
  checkVoucher: function(voucher){
    // You cannot use more than one voucher, regardless of types
    if (!this.isVoucherUsed){
      switch(voucher){
        case "SMALL":
          this.checkSmallVoucher();
          break;
        case "MEDIUM":
          this.checkMediumVoucher();
          break;
        case "LARGE":
          this.checkLargeVoucher();
          break;
        default:
          return false;
      }
    }
  },
  checkSmallVoucher: function(){
    if(this.totalPrice > 5){
      this.totalPrice -= 5;
    }
    else{
      this.totalPrice = 0;
    }
    this.isVoucherUsed = true;
  },
  checkMediumVoucher: function(){
    if (this.totalPrice >= 50){
      this.totalPrice -= 10;
    }
    this.isVoucherUsed = true;
  },
  checkLargeVoucher: function(){
    if(this.isFootwearIncluded() && this.totalPrice >= 75){
      this.totalPrice -= 15;
    }
    this.isVoucherUsed = true;
  },
  isFootwearIncluded: function(){
    for(var i = 0; i<this.cart.length; i++){
      if (this.cart[i].category.includes('Women’s Footwear') || this.cart[i].category.includes('Men’s Footwear')){
        return true;
      }
    }
    return false;
  },
  calculateTotalQuantity: function(){
    return this.cart.length;
  },
  calculateTotalPrice: function(){
    this.totalPrice = 0;
    for(var i = 0; i<this.cart.length; i++){
      this.totalPrice += this.cart[i].price;
    }
    return this.totalPrice;
  }
};
module.exports = ShoppingCartManager;