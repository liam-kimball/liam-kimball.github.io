var rack;
var board;
var numOnRack;
var points;
var totalPoints;
var doubleWordFlag;
var scores = [
    {"letter": "A", "value": 1, "amount": 9},
    {"letter": "B", "value": 3, "amount": 2},
    {"letter": "C", "value": 3, "amount": 2},
    {"letter": "D", "value": 2, "amount": 4},
    {"letter": "E", "value": 1, "amount": 12},
    {"letter": "F", "value": 4, "amount": 2},
    {"letter": "G", "value": 2, "amount": 3},
    {"letter": "H", "value": 4, "amount": 2},
    {"letter": "I", "value": 1, "amount": 9},
    {"letter": "J", "value": 8, "amount": 1},
    {"letter": "K", "value": 5, "amount": 1},
    {"letter": "L", "value": 1, "amount": 4},
    {"letter": "M", "value": 3, "amount": 2},
    {"letter": "N", "value": 1, "amount": 5},
    {"letter": "O", "value": 1, "amount": 8},
    {"letter": "P", "value": 3, "amount": 2},
    {"letter": "Q", "value": 10, "amount": 1},
    {"letter": "R", "value": 1, "amount": 6},
    {"letter": "S", "value": 1, "amount": 4},
    {"letter": "T", "value": 1, "amount": 6},
    {"letter": "U", "value": 1, "amount": 4},
    {"letter": "V", "value": 4, "amount": 2},
    {"letter": "W", "value": 4, "amount": 2},
    {"letter": "X", "value": 8, "amount": 1},
    {"letter": "Y", "value": 4, "amount": 2},
    {"letter": "Z", "value": 10, "amount": 1}
]

function genBoard() {
    var numRows = 7;
    var lengthOfRow = 7;
    board = '';
    board += '<table>';
    for (var i = 0; i < numRows; i++){
        board += '<tr>'
        for (var j = 0; j < lengthOfRow; j++){
            if ( (Math.abs(j - i))%lengthOfRow == 2 || (Math.abs(j - i))%lengthOfRow == 5){
                board += '<td><div id="droppable" class="droppD ui-widget-header"><img id="' + j + '" src="img/squareDouble.jpg"></div></td>';
            }
            else board += '<td><div id="droppable" class="dropp ui-widget-header"><img id="' + j + '" src="img/square.jpg"></div></td>';
        }
        board += '</tr>';
    }
    board += '</table>';
    $("#board").html(board);
}

function genRack() {
    var rand, letter, piece;
    numOnRack = 0;
    rack = '';
    for (i = 0; i < 7; i++){
        do {
            random = Math.floor((Math.random() * 25));
            piece = scores[random];
        }while(piece.amount == 0);
        
        letter = piece.letter;
        piece.amount = piece.amount - 1;
        rack += '<div id="' + piece.value + '" class="dragg ui-widget-content"><img src="img/' + letter + '.png"></div>';
        numOnRack++;
    }
    $("#rack").html(rack);
}

function resetGame(){
    genBoard();
    genRack();
    points = 0;
    totalPoints = 0;
    doubleWordFlag = 0;
    $("#wordScore").html(points);
    $(".dragg").draggable();
    $(".dropp").droppable({
        drop: function( event, ui ) {
            $( this )
            .addClass( "ui-state-highlight" );
            var x = $(ui.draggable).attr('id');
            x = parseInt(x,10);
            points += x;
            if (doubleWordFlag == 0) totalPoints = points;
            else totalPoints = points * Math.pow(2,doubleWordFlag);
            $(ui.draggable).detach().css({top:"-80px",left: "10px"}).draggable("disable").appendTo(this);
            numOnRack--;
            $("#wordScore").html(totalPoints);
            $( this ).droppable("disable");
        }
    });
    $(".droppD").droppable({
        drop: function( event, ui ) {
            $( this )
            .addClass( "ui-state-highlight" );
            var x = $(ui.draggable).attr('id');
            x = parseInt(x,10);
            points += x;
            doubleWordFlag += 1;
            if (doubleWordFlag == 0) totalPoints = points;
            else totalPoints = points * Math.pow(2,doubleWordFlag);
            $(ui.draggable).detach().css({top:"-80px",left: "10px"}).draggable("disable").appendTo(this);
            numOnRack--;
            $("#wordScore").html(totalPoints);
            $( this ).droppable("disable");
            //console.log(numOnRack);
        }
    });
}
  


$( function myFunction() {
    resetGame();
});


  