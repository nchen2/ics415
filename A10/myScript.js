/*Get the classes of an Element*/
function getClasses(elem) {
    var className = elem.className.split(" ");
	var arrayNames = new Array();
	for (var i = 0; i < className.length; i++) {
		arrayNames[i] = "\""+className[i]+"\"";
	}
	//For testing
    //alert("["+arrayNames+"]");
	return arrayNames;
}


function addClass(elem, className) {
    /*If element has the class attribute, else add it along with the value*/
    if (elem.hasAttribute("class")) {
		elem.className += " "+className;
        //For testing
        //var foo = elem.className.split(" ");
        //alert("["+foo+"]");
    }
    else { //IF class attribute doesn't exist
        elem.setAttribute("class",className);
        //For testing
        //var foo = elem.className.split(" ");
       //alert("["+foo+"]");
    }

}

function validateForm()
{
    var noerror = true;
    var errormsg = "Errors: "
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password =document.forms["myForm"]["password"].value;
    console.log(email);
    var confirm =document.forms["myForm"]["confirm"].value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");


    if (name ==null || name=="") {
      document.forms["myForm"]["name"].style.background = "red";
        noerror = false;
        errormsg = errormsg + "<br> * Missing Name";
        document.myForm.name.focus();
    }
	  else {
		    document.forms["myForm"]["name"].style.background = "white";
	  }
    if (email == null || email == "" || atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
      document.forms["myForm"]["email"].style.background = "red";
      noerror = false;
      if(email ==null || email == ""){
        errormsg = errormsg + "<br> *Missing Email.";
      }
      else {
        errormsg = errormsg + "<br> *Email is not in right format.";
      }
    }
	  else {
		    document.forms["myForm"]["email"].style.background = "white";
	  }

    if (password == null || password=="") {
      document.forms["myForm"]["password"].style.background = "red";
      nonerror = false;
      errormsg = errormsg + "<br> *Missing Password";
    }
	  else { //Sets the input field back to white
		    document.forms["myForm"]["password"].style.background = "white";
	  }

    if (confirm == null || confirm == "" || email != confirm) {
      document.forms["myForm"]["confirm"].style.background = "red";
        nonerror = false;
        if(email != confirm) {
          errormsg = errormsg + "<br> *Password does not match";
          errormsg = errormsg + "<br> e is" + email;
          errormsg = errormsg + "<br> confirm is" + confirm;


        }
        else {
          errormsg = errormsg + "<br> *Missing Confirmation Password";
        }
    }
    else {
      document.forms["myForm"]["confirm"].style.background = "white";
    }

    document.getElementById("errors").innerHTML = errormsg;

		return noerror;

}

