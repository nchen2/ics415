function add() {
    var query = location.search.substr(1).split("&");

    var inputs = [];

    if (window.location.search)
    {
      var values = window.location.search.slice(1).split("&");
      for (var i = 0; i < values.length; i++)
      {
        var temp = values[i].split("=");
        inputs[i] = decodeURIComponent(temp[1]);
      }
    }

    var table = document.createElement('table');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.appendChild(document.createTextNode("Name:"));
    var cell2 = row.insertCell(1);
    cell2.appendChild(document.createTextNode(inputs[0]));

    row = table.insertRow();
    cell1 = row.insertCell(0);
    cell1.appendChild(document.createTextNode("Address:"));
    cell2 = row.insertCell(1);
    cell2.appendChild(document.createTextNode(inputs[1]));

    row = table.insertRow();
    cell1 = row.insertCell(0);
    cell1.appendChild(document.createTextNode("Phone:"));
    cell2 = row.insertCell(1);
    cell2.appendChild(document.createTextNode(inputs[2]));





  document.getElementById("main").appendChild(table);


}

