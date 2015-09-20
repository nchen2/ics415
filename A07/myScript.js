/* returns an array of class belong to a element */
function getClasses(elem) {
  if(elem == null) {
    return [];
  }
  var x = elem.className;
  var classarray = x.split(" ");
  return classarray;
}

/* adds class to element but does not add multiples with the same class name */
function addClass(elem, className) {
  var exist = getClasses(elem);
  var double = false;
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
}

/* validates forms to make sure all replies are not empty, password and confirm password are the same */
function validateForm()
{
  var noerror = true;
  var errormsg = "Errors: "
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password =document.forms["myForm"]["password"].value;
  var confirm =document.forms["myForm"]["confirm"].value;
  if (name == "" || name == null) {
    noerror = false;
    errormsg = errormsg + "<br> * Missing Name";
    document.forms["myForm"]["name"].style.background = "red";
  }
  else {
    document.forms["myForm"]["name"].style.background = "";
  }
  if (email == "" || email == null) {
    noerror = false;
    errormsg = errormsg + "<br> *Missing Email";
    document.forms["myForm"]["email"].style.background = "red";
  }
  else {
    document.forms["myForm"]["email"].style.background = "";
  }
  if (password == "" || password == null) {
    noerror = false;
    errormsg = errormsg + "<br> *Missing Password";
    document.forms["myForm"]["password"].style.background = "red";
  }
  else {
    document.forms["myForm"]["password"].style.background = "";
  }

  if(confirm == "" || confirm == null || password != confirm) {
    noerror = false;
    if(password != confirm) {
      errormsg = errormsg + "<br> *Password does not match";
    }
    else {
      errormsg = errormsg + "<br> *Missing Confirmation Password";
    }
    document.forms["myForm"]["confirm"].style.background = "red";
  }
  else {
    document.forms["myForm"]["confirm"].style.background = "";
  }

  if(noerror) {
    return true;
  }

  document.getElementById("errors").innerHTML = errormsg;
  return false;

}

