var React = require('react');

var NavMenu = React.createClass({
  render: function(){
    return (
      // TODO: make it dynamic
        <div className="menu">
          <p className="select" id="women-footwear">Women’s footwear</p>
          <p className="select" id="men-footwear">Men’s footwear</p>
          <p className="select" id="women-casualwear">Women’s casualwear</p>
          <p className="select" id="men-casualwear">Men’s casualwear</p>
          <p className="select" id="women-formalwear">Women’s formalwear</p>
          <p className="select" id="men-formalwear">Man’s formalwear</p>
        </div>
    )
  }
});

module.exports = NavMenu;