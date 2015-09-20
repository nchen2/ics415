function getClasses(elem) {
  if(elem == null) {
    return [];
  }
  var x = elem.className;
  var classarray = x.split(" ");
  return classarray;
}


function addClass(elem, className) {
  var exist = getClasses(elem);
  var double = false;
  document.getElementById("demo").innerHTML = "Get class " + getClasses(elem).toString();
  var addition ="";
  if(exist == null || exist.length == 0 || exist[0] == "") {
    elem.className = className;
  }
  else {
    for (i = 0; i < exist.length; i++) {
      if(className == exist[i]) {
        double = true;
      }
      addition = addition + exist[i] + " ";
    }
    if(!double) {
      addition = addition + className;
    }
    else {
      addition = addition.substr(0,addition.length-1);
    }
    elem.className = addition;
  }
  document.getElementById("demo2").innerHTML = "Get class " + getClasses(elem).toString();
}