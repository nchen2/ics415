function validateForm()
{
  valid = true;

  username = document.getElementsByName("name")[0];
  email = document.getElementsByName("email")[0];
  password = document.getElementsByName("password")[0];
  confirm = document.getElementsByName("confirm")[0];

  // If invalid input, then display error message and highlight appropriate fields
  if ((username.value.length == 0) || (email.value.length == 0) ||
      (password.value.length == 0) || (confirm.value.length == 0) ||
      ((password.value != confirm.value)))
  {
    valid = false;
    body = document.getElementsByTagName("body")[0];
    form = document.getElementsByTagName("form")[0];

    // If error messages are already present, then remove the messages
    // and reset the background colors for all text fields
    if (document.getElementsByClassName("error").length > 0)
    {
      errors = document.getElementsByClassName("error");

      for (var i = errors.length - 1; i >= 0; i--)
      {
        body.removeChild(errors[i]);
      }

      username.setAttribute("style", username.getAttribute("style").replace("background-color: red", ""));
      email.setAttribute("style", email.getAttribute("style").replace("background-color: red", ""));
      password.setAttribute("style", password.getAttribute("style").replace("background-color: red", ""));
      confirm.setAttribute("style", confirm.getAttribute("style").replace("background-color: red", ""));
    }

    warning = document.createElement("p");
    warning.textContent = "Error: ";
    addClass(warning, "error");
    body.insertBefore(warning, form);

    message = "";

    if (username.value.length == 0)
    {
      message += "User name field empty\n";
      username.setAttribute("style", "background-color: red");
    }
    if (email.value.length == 0)
    {
      message += "Email field empty\n";
      email.setAttribute("style", "background-color: red");
    }
    if (password.value.length == 0)
    {
      message += "Password field empty\n";
      password.setAttribute("style", "background-color: red");
    }
    if (confirm.value.length == 0)
    {
      message += "Confirm password field empty\n";
      confirm.setAttribute("style", "background-color: red");
    }
    if (password.value != confirm.value)
    {
      message += "Password and confirm password fields do not match";
      password.setAttribute("style", "background-color: red");
      confirm.setAttribute("style", "background-color: red");
    }

    errors = message.split("\n");
    ul = document.createElement("ul");
    addClass(ul, "error");
    body.insertBefore(ul, form);

    for (var i = 0; i < errors.length; i++)
    {
      if (errors[i].length > 0)
      {
        error = document.createElement("li");
        error.textContent = errors[i];
        ul.appendChild(error);
      }
    }

  }

  return valid;
}
