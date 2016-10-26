
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
    // if you remove any items, a voucher can be applied again
    this.isVoucherUsed = false;
  },
  checkVoucher: function(voucher){
    // You cannot use more than one voucher, regardless of types
    if (!this.isVoucherUsed){
      switch(voucher){
        case "SMALL":
          this.checkSmallVoucher();
          return true
        case "MEDIUM":
          this.checkMediumVoucher();
          return true
        case "LARGE":
          this.checkLargeVoucher();
          return true
        default:
          return false;
      }
    }
  },
  checkSmallVoucher: function(){
    if(this.totalPrice > 5.00){
      this.totalPrice -= 5.00;
    }
    else{
      this.totalPrice = 0;
    }
    this.isVoucherUsed = true;
  },
  checkMediumVoucher: function(){
    if (this.totalPrice >= 50.00){
      this.totalPrice -= 10.00;
    }
    this.isVoucherUsed = true;
  },
  checkLargeVoucher: function(){
    if(this.isFootwearIncluded() && this.totalPrice >= 75.00){
      this.totalPrice -= 15.00;
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
  calculateTotalPrice: function(){
    this.totalPrice = 0;
    for(var i = 0; i<this.cart.length; i++){
      this.totalPrice += this.cart[i].price;
    }
    return this.totalPrice;
  }
};
module.exports = ShoppingCartManager;