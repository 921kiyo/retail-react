var Api = function(){};
Api.prototype = {
  httpRequest: function(url, callback){
    var url = '/api/items';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if(request.status == 200){
        var json = request.responseText;
        var data = JSON.parse(json);
        callback(data);
        return data;
      }
    }.bind(this);
    request.send(null);
  }
}

module.exports = Api;