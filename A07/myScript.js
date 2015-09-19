
function getClasses() {
  var x = document.getElementById("box").className;
  var classarry = x.split(" ");
  document.getElementById("demo").innerHTML = classarry;
  return classarry;

}

function addClass(elem, className) {

  var exist = getClasses();
  var addition = "";
  for (i = 0; i < exist.length; i++) {
    addition = addition + exist[i] + " ";
  }

  if(exist.length == 0) {
    addition = className;
  }
  else {
    addition = addition + " " + className;
  }
  document.getElementById("box").innerHTML = addition;
  elem.className = addition;

}