$(document).ready(function(){
  $(".val p b").hide();
  $("#Ceasarbutton").click(function(){
      $("input:text").val("Ceasar");
    });
  $(".lonelybutton").click(function(){
    $("h6").text("ADOPT ME PLEASE!!!");
  });
  $(".fadeincat, .anothercat").hide();

  $(".morecatsbutton").click(function(){
    $(".fadeincat, .anothercat").fadeIn();
  });
  $(".fadeoutbutton").click(function(){
    $(".fadeoutcat, .snowcat").fadeOut();
  });
  $(".differentcatbutton").click(function(){
    $(".textcat").toggle();
  });
  $(".htmlbutton").click(function(){
    $(".htmlbutton").html("LIKES GOLDFISH");

  });
  $(".attrbutton").click(function(){
    $(".codercat").attr("height","100px");
  });
  $(".before").hide();
  $("#show").click(function(){
    $(".before").show();
  });

  $("#hide").click(function(){
    $(".before").hide();
  });

  $(".title").hide();
  $("#flip").click(function(){
    $(".title").slideToggle("slow");

  });

  $("#panel").click(function(){
    $(".title").addClass("red");

  });

  $(".1,.2").click(function(){
    $(".1,.2").slideUp("slow");

  });

  $(".3").click(function(){
    $(".1,.2").slideDown("slow");

});
});
