var React = require('react');
var HeaderBox = require('./HeaderBox.jsx');
var ItemList = require('./ItemList.jsx');
var NavMenu = require('./NavMenu.jsx');

//Model
var Api = require('../models/api.js')

var MasterBox = React.createClass({
  getInitialState:function(){

    return {
      items: []
    }
  },
  set: function(data){
    // console.log('data', data)
    this.setState({items: data})
    return
  },
  componentDidMount: function(){
    var api = new Api();
    var url = '/api/items';
    api.httpRequest(url, this.set);
  //   var url = '/api/items';
  //   var request = new XMLHttpRequest();
  //   request.open('GET', url);
  //   request.onload = function(){
  //     if(request.status == 200){
  //       var json = request.responseText;
  //       var data = JSON.parse(json);
  //       this.setState({items: data});
  //     }
  //   }.bind(this);
  //   request.send(null);
  },
  render: function(){
    return (
      <div>
        <HeaderBox />
        <ItemList items={this.state.items}/>
        <NavMenu items={this.state.items}/>
      </div>
    )
  }
});

module.exports = MasterBox;