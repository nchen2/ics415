$(document).ready(function() {
    $("#div1").hide();

  $("#hide2").click(function(){
    $("#div2").hide();
  });

  $("#show1").click(function(){
    $("#div1").show();
  });

  $("#show2").click(function(){
    $("#div2").show();
  });

  $("#load1").click(function(){
    $("#div1").load("text");
  });

  $("#get2").click(function(){
    $.get("table.html",function(data) {
      $("#p2").html(data);
    });
  });

});
