var assert = require('chai').assert;
var ShoppingCartManager = require('../shoppingCartManager');


describe('Shopping Cart', function(){
  beforeEach(function(){
    shoppingCartManager = new ShoppingCartManager();
    item1 = {
        id: 1,
        name: "Almond Toe Court Shoes",
        category: "Women’s Footwear",
        color: "Patent Black",
        price: 99.00,
        stock: 5,
        imgUrl: "public/img/women-footwear.png"
      };
    item2 = {
        id: 2,
        name: "Suede Shoes",
        category: "Women’s Footwear",
        color: "Blue",
        price: 42.00,
        stock: 4,
        imgUrl: "public/img/women-footwear.png"
      };
  });

  it('can add an item', function(){
    shoppingCartManager.addItem(item1);
    assert.equal(1, shoppingCartManager.cart.length);
  });

  it('can remove an item', function(){
    shoppingCartManager.addItem(item1);
    shoppingCartManager.addItem(item2);
    shoppingCartManager.removeItem(item1);
    assert.equal(1, shoppingCartManager.cart.length);
  });

  it('can check the type of voucher applied', function(){
    shoppingCartManager.addItem(item1);
    shoppingCartManager.calculateTotalPrice();
    shoppingCartManager.checkVoucher("SMALL");
    // Checking if the second voucher should not change the total price
    shoppingCartManager.checkVoucher("SMALL");
    assert.equal(94.00, shoppingCartManager.totalPrice );
  });

  it('can check the function of small voucher', function(){
    shoppingCartManager.addItem(item1);
    shoppingCartManager.calculateTotalPrice();
    shoppingCartManager.checkSmallVoucher();
    assert.equal(94.00, shoppingCartManager.totalPrice );
  });

  it('can check the function of medium voucher', function(){
    shoppingCartManager.addItem(item1);
    shoppingCartManager.calculateTotalPrice();
    shoppingCartManager.checkMediumVoucher();
    assert.equal(89.00, shoppingCartManager.totalPrice );
  });

  it('can check the function of large voucher', function(){
    shoppingCartManager.addItem(item1);
    shoppingCartManager.calculateTotalPrice();
    shoppingCartManager.checkLargeVoucher();
    assert.equal(84.00, shoppingCartManager.totalPrice );
  });

  it('can check if footwear is included in the cart', function(){
    shoppingCartManager.addItem(item1);
    var result = shoppingCartManager.isFootwearIncluded();
    assert.equal(true, result );
  });

  it('can calculate the total quantity', function(){
    shoppingCartManager.addItem(item1);
    shoppingCartManager.addItem(item2);
    var result = shoppingCartManager.calculateTotalQuantity();
    assert.equal(2, result);
  });

  it('can calculate the total price', function(){
    shoppingCartManager.addItem(item1);
    shoppingCartManager.addItem(item2);
    var result = shoppingCartManager.calculateTotalPrice();
    assert.equal(141.00, result);
  });

});