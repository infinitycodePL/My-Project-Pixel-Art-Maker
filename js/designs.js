// Select color input


$(document).ready(function () {

    const table = $('#pixelCanvas');
    const reset = $('#reset');
    let heightGrid, widthGrid, color;

    // Select size input
    function makeGrid() {

        heightGrid = $('#inputHeight').val();
        widthGrid = $('#inputWidth').val();

        table.empty();

        for (let i = 0; i < heightGrid; i++) {
            table.append('<tr></tr>');
        }
        for (let i = 0; i < widthGrid; i++) {
            $('tr').append('<td></td>');
        }
    }

    // When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit(function (event) {
        event.preventDefault();
        makeGrid();
    });

    // Add color to Grid
    $(table).on('click', 'td', function () {
        color = $('#colorPicker').val();
        $(this).css('background', color);
    });

    // Drag & draw
    $(table).on('mouseover', 'td', function (event) {
        event.preventDefault();
        color = $('#colorPicker').val();
        if (event.buttons) {
            $(this).css("background-color", color);
        }
    });


    // Remove color from Grid
    $(table).on('dblclick', 'td', function () {
        $(this).css('background', 'transparent');
    });

    // Clear Canvas
    $(reset).on('click', function () {
        $('td').css('background-color', 'white');
    });

});
