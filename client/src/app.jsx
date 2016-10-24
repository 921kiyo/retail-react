var React = require('react');
var ReactDOM = require('react-dom');
var MasterBox = require('./components/MasterBox.jsx');

// var DisplayItems = require('./src/views/displayItems');
window.onload = function(){
  // main();

  ReactDOM.render(
    <MasterBox url="/api/items"/>, document.getElementById('app')
  )
}

// var Main = function() {
//   var self = this;
//   console.log(self.query);
//   // Creating a list of items on browser
//   var items;
//   var url = '/api/items';
//   var request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.onload = function(){
//     if(request.status == 200){
//       var json = request.responseText;
//       items = JSON.parse(json);
//       var displayItems = new DisplayItems();
//       for (i=0; i<items.length; i++){
//         displayItems.createItemDOM(items[i]);

//       }
//     }
//   }
//   request.send(null);


//   self.add = function(item){
//     console.log(item);
//   }

//   // Function for clicking hamburger icon to open menu
//   var navMenu = document.getElementById('menu-button');
//   navMenu.addEventListener('click', function(event){
//     var menu = document.querySelector('.menu');
//     menu.classList.toggle('open');
//     event.stopPropagation();
//   });

//   // Function for closing menu
//   var box = document.getElementById('main-display');
//   box.addEventListener('click', function(event){
//     var menu = document.querySelector('.menu');
//     menu.className = 'menu';
//   });

// }