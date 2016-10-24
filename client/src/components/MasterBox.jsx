var React = require('react');
var HeaderBox = require('./HeaderBox.jsx');
var ItemList = require('./ItemList.jsx');
var NavMenu = require('./NavMenu.jsx');

var MasterBox = React.createClass({
  getInitialState:function(){
    return {items: []}
  },
  componentDidMount: function(){

  },
  render: function(){
    return (
      <div>
        <HeaderBox />
        <ItemList />
        <NavMenu />
      </div>
    )
  }
});

module.exports = MasterBox;