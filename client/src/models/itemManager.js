var ItemManager = function(){}

ItemManager.prototype = {
  increaseStock: function(item){
    item.stock +=1;
    return item.stock;
  },
  decreaseStock: function(item){
    item.stock -=1;
    console.log(item.stock)
    return item.stock;
  }
}

module.exports = ItemManager;