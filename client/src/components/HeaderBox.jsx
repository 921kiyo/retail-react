var React = require('react');


var HeaderBox = React.createClass({
  render: function(){
    return (
      <div className="box header">
        <div id="nav-menu">
          <span id='menu-button'><i class="fa fa-bars" aria-hidden="true"></i></span>
        </div>
          <button id="cart">Cart</button>
          <p id="total-quantity"></p>
          <p id="total-price"></p>
      </div>
    )
  }
});

module.exports = HeaderBox;