
/* returns an array of the classes belonging to a element */
/* if the elem does not have a class, function will return an empty array of length 0 */
/* function assumes that there are no preceding white space in front of the first class name and only one
 white space is in between multiple classes */
function getClasses(elem) {
  var x = elem.className;
  if(x =="") {
    return [];
  }
  var classarray = x.split(" ");
  return classarray;
}

/* adds class to element but does not add multiples with the same class name */
/* function assumes that there are no preceding white space in front of the first class name and only one
 white space is in between multiple classes */
function addClass(elem, className) {
  var exist = getClasses(elem);
  document.getElementById("demo").innerHTML = "Get class" + getClasses(elem).toString() +getClasses(elem).length;
  var double = false;
  var addition ="";
  if(exist.length == 0 || exist[0] == "") {
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
  document.getElementById("demo2").innerHTML = "Get class " + getClasses(elem).toString() +getClasses(elem).length;
}
