function parseGET(){
  var variables = location.search.substr(1).split("&");
  var temp = [];

  var table = document.getElementById("table");

  var string ="<tr><th>Variable</th><th>Value</th></tr>";

  for(var i = 0; i < variables.length; i++){
    temp = variables[i].split("=");
    temp[1] = decodeURIComponent(temp[1]);
    string += "<tr><td>"+temp[0]+"</td><td>"+temp[1]+"</td></tr>";
  }
  document.getElementById("main").innerHTML = string;
}