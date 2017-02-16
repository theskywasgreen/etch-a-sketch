$(document).ready(function() {
  for(var i = 0; i < 16; i++) {
    for(var j = 0; j < 16; j++) {
    $('#grid').append('<div class= square></div>');
    };
  };
  $(".square").mouseenter(function() {
    $(this).css("background-color", "#7fffd4");
  });

//clears the canvas and resets the color on hover back to #7fffd4//
  $("#clear").click(function() {
    $("#grid").effect("shake", {times:4}, 1000);
    $(".square").css("background-color", "white");
    $(".square").mouseenter(function() {
    $(this).css("background-color", "#7fffd4");
    });
  });
  //creates a random color for each square when button is clicked//
  $("#randomcolor").click(function() {
    $(".square").mouseenter(function() {
    var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $(this).css('background-color', randomColorChange);
  });
  });
});






  //Function to create every square produce a random color upon mouse entering.
  //$(".square").mouseenter(function() {
  //var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    //$(this).css('background-color', randomColorChange);
    //});
  //});
