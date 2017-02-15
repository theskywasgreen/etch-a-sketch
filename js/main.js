$(document).ready(function() {
  for(var i = 0; i < 16; i++) {
    for(var j = 0; j < 16; j++) {
    $('#grid').append('<div class= square></div>');
    };
  };
  $(".square").mouseenter(function() {
        $(this).css("background-color", "#7fffd4");
  });
});
