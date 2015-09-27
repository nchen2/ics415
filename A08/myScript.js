/*function initially hides all answer divs and all question divs with the minus symbol */
/* when user clicks on questions, the answer divs will show and question divs with minus symbol will show*/
function faq() {
  $("#q1open").hide();
  $("#q2open").hide();
  $("#q3open").hide();
  $("#q4open").hide();
  $("#q5open").hide();
  $("#a1").hide();
  $("#a2").hide();
  $("#a3").hide();
  $("#a4").hide();
  $("#a5").hide();

  $("#q1close").click(function(){
    $("#q1close").hide();
    $("#q1open").show();
    $("#a1").show();
  });

  $("#q1open").click(function(){
    $("#q1open").hide();
    $("#q1close").show();
    $("#a1").hide();
  });

  $("#q2close").click(function(){
    $("#q2close").hide();
    $("#q2open").show();
    $("#a2").show();
  });

  $("#q2open").click(function(){
    $("#q2open").hide();
    $("#q2close").show();
    $("#a2").hide();
  });

  $("#q3close").click(function(){
    $("#q3close").hide();
    $("#q3open").show();
    $("#a3").show();
  });

  $("#q3open").click(function(){
    $("#q3open").hide();
    $("#q3close").show();
    $("#a3").hide();
  });

  $("#q4close").click(function(){
    $("#q4close").hide();
    $("#q4open").show();
    $("#a4").show();
  });

  $("#q4open").click(function(){
    $("#q4open").hide();
    $("#q4close").show();
    $("#a4").hide();
  });

  $("#q5close").click(function(){
    $("#q5close").hide();
    $("#q5open").show();
    $("#a5").show();
  });

  $("#q5open").click(function(){
    $("#q5open").hide();
    $("#q5close").show();
    $("#a5").hide();
  });
}

/*returns the number of links in the body of the url by counting the number of <a> in the page*/
function linkcount(){
  var link = document.forms["myForm"]["url"].value;

  $.get(link, function(data)
  {
    var insert = document.createElement("P");
    var numlink = ($(data).find("a").length);
    var text = document.createTextNode("Number of links in page : " + numlink);
    insert.appendChild(text);
    document.getElementById("result").appendChild(insert);
  });
  return false;
}