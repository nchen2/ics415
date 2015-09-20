
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
  var addition = "";
  for (i = 0; i < exist.length; i++) {
    addition = addition + exist[i] + " ";
  }

  if(exist == null || exist.length == 0) {
    addition = className;
  }
  else {
    addition = addition + " " + className;
  }
  elem.className = addition;
}

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
    document.forms["myForm"]["name"].style.background = "white";
  }
  if (email == "" || email == null) {
    noerror = false;
    errormsg = errormsg + "<br> *Missing Email";
    document.forms["myForm"]["email"].style.background = "red";
  }
  else {
    document.forms["myForm"]["email"].style.background = "white";
  }
  if (password == "" || password == null) {
    noerror = false;
    errormsg = errormsg + "<br> *Missing Password";
    document.forms["myForm"]["password"].style.background = "red";
  }
  else {
    document.forms["myForm"]["password"].style.background = "white";
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
    document.forms["myForm"]["confirm"].style.background = "white";
  }

  if(noerror) {
    return true;
  }

  document.getElementById("errors").innerHTML = errormsg;
  return false;

}

