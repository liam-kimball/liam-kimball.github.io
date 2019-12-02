var numX1, numX2, numY1, numY2, text, textTable;
function submitNums() {         //puts values from form into corresponding variable
    numX1 = document.getElementById("x1").value;
    numX2 = document.getElementById("x2").value;
    numY1 = document.getElementById("y1").value;
    numY2 = document.getElementById("y2").value;
    numX1 = Number(numX1);
    numX2 = Number(numX2);
    numY1 = Number(numY1);
    numY2 = Number(numY2);
    orderNums();        //put nums in correct order
    table();            //generate table
}

function orderNums() {      //if the first input is greater than second     digits are switched
    if(numX2 < numX1){
        var temp = numX1;
        numX1 = numX2;
        numX2 = temp;
    }
    if(numY2 < numY1){
        var temp = numY1;
        numY1 = numY2;
        numY2 = temp;
    }
}

function table() {
    var x2 = numX2;
    var y2 = numY2;
    x2++;
    y2++;

    //generates first row of table headers
    textTable = '<thead>';
    textTable += '<tr>';
    for( var i = numX1; i < x2; i++) {
        if ( i == numX1) {
            textTable += '<th scope="col">';
            textTable += ' ';
            textTable += '</th>';
        }
        textTable += '<th scope="col">';
        textTable += i;
        textTable += '</th>';
    }
    textTable += '</tr>';
    textTable += '</thead>';

    //generates the other rows of table
    textTable += '<tbody>';
    for ( var i = numY1; i < y2; i++) {
        textTable += '<tr>';
        for ( var j = numX1; j < x2; j++) {
            if ( j == numX1) {                      //If first element of row, make it a header
                textTable += '<th scope="row">';
                textTable += i;
                textTable += '</th>';
            }                       
            textTable += '<td>';
            var num = i * j;
            textTable += num;
            textTable += '</td>';
        }
        textTable += '</tr>';
    }
    textTable += '</tbody>'
    document.getElementById("multi").innerHTML = textTable;
}
