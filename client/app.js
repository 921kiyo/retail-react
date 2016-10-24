var DisplayItems = require('./src/views/displayItems');

window.onload = function(){
  main();
}

var main = function() {
  var items;
  var url = '/api/items';
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function(){
    if(request.status == 200){
      var json = request.responseText;
      items = JSON.parse(json);
      var displayItems = new DisplayItems();
      for (i=0; i<items.length; i++){
        displayItems.createItemDOM(items[i]);
      }
    }
  }
  request.send(null);



  // Function for clicking hamburger icon to open menu
  var navMenu = document.getElementById('menu-button');
  navMenu.addEventListener('click', function(event){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
    event.stopPropagation();
  });

  // Function for closing menu
  var box = document.getElementById('main-display');
  box.addEventListener('click', function(event){
    var menu = document.querySelector('.menu');
    menu.className = 'menu';
  });

}