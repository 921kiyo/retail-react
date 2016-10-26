var React = require('react');

var HeaderBox = React.createClass({
  // Function for clicking cart icon to view cart (off canvas)
  viewCart: function(event){
    var menu = document.querySelector('.cart-list');
    menu.classList.toggle('open');
    event.stopPropagation();
  },
  render: function(){
    return (
      <div className="box header">
        <div id="nav-menu">
          <i id="cart-icon" className="fa fa-shopping-cart fa-4x" aria-hidden="true" onClick={this.viewCart}></i>
        </div>
      </div>
    )
  }
});

module.exports = HeaderBox;