// function that builds a grid//
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#grid").append("<div class='square'></div>");
        };
    };
    $(".square").width(480/x);
    $(".square").height(480/x);
};

// function that sets the color back to default//
function set_default_color() {
    $(this).css("background-color", "#7fffd4");
}

// function that clears the grid
function clearGrid(){
    $(".square").remove();
};

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("Please pick number of squares per side up to 60");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);

    $(".square").mouseenter(set_default_color);

    //creates a random color for each square when button is clicked//
    $("#randomcolor").click(function() {
      $(".square").mouseenter(function() {
        var randomColorChange = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        $(this).css('background-color', randomColorChange);
      });
    });

    $("#clear").click(function() {
      clearGrid();
      createGrid(16);

    $(".square").mouseenter(set_default_color);
    });

    $("#usersquares").click(function() {
      refreshGrid();

      $(".square").mouseenter(set_default_color);
    });

    $("#mint").click(function() {
      $(".square").mouseenter(set_default_color);
    });

    $("#clear, #randomcolor, #usersquares, #mint").mouseenter(function() {
      $(this).fadeTo("fast", 0.85);
    });

    $("#clear, #randomcolor, #usersquares, #mint").mouseleave(function() {
      $(this).fadeTo("fast", 1);
    });
});
