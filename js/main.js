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

// function that sets the color of pixels back to default//
function set_default_color() {
    $(this).css("background-color", "#7fffd4");
}

// function that clears the grid
function clearGrid(){
    $(".square").remove();
};

// function that prompts the user to select the number of squares in a new grid
// the function then creates the new grid based on that input
function refreshGrid(){
    var z = prompt("Please pick number of squares per side up to 60");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to mint when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);

    $(".square").mouseenter(set_default_color);

// clears the grid and sets the pixel color back to default #7fffd4 when the button is clicked
    $("#clear").click(function() {
      clearGrid();
      createGrid(16);

    $(".square").mouseenter(set_default_color);
    });

// allows the user to create a grid with pixel size of their preference by clicking button
    $("#usersquares").click(function() {
      refreshGrid();

      $(".square").mouseenter(set_default_color);
    });

// creates a random color for each pixel when button is clicked
    $("#randomcolor").click(function() {
      $(".square").mouseenter(function() {
        var randomColorChange = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        $(this).css('background-color', randomColorChange);
        });
    });

// allows the user to set pixel color to #7fffd4 when button is clicked
    $("#mint").click(function() {
      $(".square").mouseenter(set_default_color);
    });

// creates a dim effect on the buttons when the user hovers over a button and removes the dim when the cursor is moved away
    $("#clear, #randomcolor, #usersquares, #mint").mouseenter(function() {
      $(this).fadeTo("fast", 0.85);
    });

    $("#clear, #randomcolor, #usersquares, #mint").mouseleave(function() {
      $(this).fadeTo("fast", 1);
    });
});
