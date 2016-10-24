/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var DisplayItems = __webpack_require__(1);

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

/***/ },
/* 1 */
/***/ function(module, exports) {

	var DisplayItems = function(){};

	DisplayItems.prototype = {
	  createItemDOM: function(item){
	   var ul = document.getElementById('item-ul');
	   var li = document.createElement('li');
	   // creating p is DYI
	   var img = document.createElement('img');
	   var pName = document.createElement('p');
	   var pPrice = document.createElement('p');
	   var pStock = document.createElement('p');
	   var pColor = document.createElement('p');
	   img.setAttribute('src', item.imgUrl);
	   img.setAttribute('class', 'item-image');
	   img.setAttribute('id', item.id);

	   pName.innerText = item.name;
	   pPrice.innerText = item.price;
	   pStock.innerText = item.stock;
	   pColor.innerText = item.color;
	   // DYI
	   li.appendChild(img);
	   li.appendChild(pName);
	   li.appendChild(pPrice);
	   li.appendChild(pStock);
	   li.appendChild(pColor);
	   // Add button
	   var button = document.createElement('button');
	   button.setAttribute('class', 'add-button');
	   button.innerText = 'Add'
	   li.appendChild(button);
	   ul.appendChild(li);
	 }
	}

	module.exports = DisplayItems;

/***/ }
/******/ ]);