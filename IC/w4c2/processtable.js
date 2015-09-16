function insert() {
  var table = document.getElementById("myTable");
  var name = document.getElementById("username");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

  var row = table.insertRow(1)
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Name";
  cell2.innerHTML = name;

  row = table.insertRow(2)
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell1.innerHTML = "Address";
  cell2.innerHTML = address;

  row = table.insertRow(3)
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell1.innerHTML = "Phone";
  cell2.innerHTML = phone;
}

function add() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}
