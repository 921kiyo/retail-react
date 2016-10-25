var ItemManager = function(){}

ItemManager.prototype = {
  addStock: function(item){
    item.stock +=1;
    return item.stock;
  },
  reduceStock: function(item){
    item.stock -=1;
    return item.stock;
  },
  checkStock: function(item){
    item.stock > 0 ? true : false;
  }
}

module.exports = ItemManager;