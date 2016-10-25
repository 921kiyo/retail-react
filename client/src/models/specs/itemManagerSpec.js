var assert = require('chai').assert;
var ItemManager = require('../itemManager');

describe('Item', function(){
  beforeEach(function(){
    itemManger = new ItemManager();
    item1 = {
        id: 1,
        name: "Almond Toe Court Shoes",
        category: "Women’s Footwear",
        color: "Patent Black",
        price: 99.00,
        stock: 5,
        imgUrl: "public/img/women-footwear.png"
      };
  })

  it('can add a stock', function(){
    itemManger.addStock(item1);
    assert.equal(6, item1.stock);
  });

  it('can reduce a stock', function(){
    itemManger.reduceStock(item1);
    assert.equal(4, item1.stock);
  });

  it('can check stock', function(){
    var result = itemManger.checkStock(item1);
    assert.equal(true, result);
  });
});