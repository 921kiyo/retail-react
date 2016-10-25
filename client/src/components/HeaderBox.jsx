var React = require('react');

var HeaderBox = React.createClass({
  // Function for clicking hamburger icon to open menu
  viewCart: function(event){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
    event.stopPropagation();
  },
  render: function(){
    return (
      <div className="box header">
        <div id="nav-menu">
          <i className="fa fa-shopping-cart fa-5x" aria-hidden="true" onClick={this.viewCart}></i>
        </div>
      </div>
    )
  }
});

module.exports = HeaderBox;