var numX1, numX2, numY1, numY2, text, textTable;
var tabNameNum = 1;
var tabName = "Tab";
var numTabs = 0;

function genTab() {
    if(numTabs <= 9){
        numTabs += 1;
        document.getElementById("tabsWarning").style.display = "none";
        submitNums();
        tabNameNum += 1;
        tabName = "Tab" + tabNameNum;
        tabTitle = '<li id="tab' + tabName + '" class="tab"><a href="#' + tabName + '">' + 'X: ' + numX1 + '->' + numX2 + '  Y: ' + numY1 + '->' + numY2 +'</a><span class="ui-icon ui-icon-close" role="presentation"></span></li>';
        document.getElementById("tabs").innerHTML += tabTitle;
        table(tabName);
        $("div#myTabs").append(textTable);
        $("#myTabs").tabs("refresh");
    }
    else {
        document.getElementById("tabsWarning").style.display = "block";
    }
}

function delTabs() {
    $("#firstTab").nextAll().remove();
    $("#Entry").nextAll().remove();
    numTabs = 0;
    if (numTabs <= 9) document.getElementById("tabsWarning").style.display = "none";
}

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
    table('entryTable');            //generate table
    document.getElementById("entrytablehere").innerHTML = textTable;

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

function table(nameID) {
    var x2 = numX2;
    var y2 = numY2;
    x2++;
    y2++;

    //generates first row of table headers
    
    textTable = '<div id="' + nameID + '">';
    textTable += '<h3>TABLE: </h3>';
    textTable += '<table class="table">'

    textTable += '<thead>';
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
    textTable += '</tbody>';
    textTable += '</table>';
    textTable += '</div>';
}
$(document).ready(function() {
    $("#myTabs").tabs();
    $("#tabs").delegate("span.ui-icon-close", "click", function() {
        var tabDel = $(this).closest("li").remove().attr("aria-controls");
        $("#" + tabDel).remove();
        numTabs = numTabs - 1;
        if (numTabs <= 9) document.getElementById("tabsWarning").style.display = "none";
    });

    $("#x1slider").slider({
        min: -50,
        max: 50,
        value: 0,
        slide: function( event, ui ) {
            $("#x1").val(ui.value);
            submitNums();
        }
    });
    $("#x1").val($("#x1slider").slider("value"));
    $("#x2slider").slider({
        min: -50,
        max: 50,
        value: 10,
        slide: function( event, ui ) {
            $("#x2").val(ui.value);
            submitNums();
        }
    });
    $("#x2").val($("#x2slider").slider("value"));
    
    $("#y1slider").slider({
        min: -50,
        max: 50,
        value: 0,
        slide: function( event, ui ) {
            $("#y1").val(ui.value);
            submitNums();
        }
    });
    $("#y1").val($("#y1slider").slider("value"));
    $("#y2slider").slider({
        min: -50,
        max: 50,
        value: 10,
        slide: function( event, ui ) {
            $("#y2").val(ui.value);
            submitNums();
        }
    });
    $("#y2").val($("#y2slider").slider("value"));


    $("#x1").change(function() {
        var oldVal = $("#x1slider").slider("value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < -50 || newVal > 50) {
            $("#x1").val(oldVal);
        } else {
        $("#x1slider").slider("value", newVal);
        }
        submitNums();
    });
    $("#x2").change(function() {
        var oldVal = $("#x2slider").slider("value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < -50 || newVal > 50) {
            $("#x2").val(oldVal);
        } else {
        $("#x2slider").slider("value", newVal);
        }
        submitNums();
    });
    $("#y1").change(function() {
        var oldVal = $("#y1slider").slider("value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < -50 || newVal > 50) {
            $("#y1").val(oldVal);
        } else {
        $("#y1slider").slider("value", 0, newVal);
        }
        submitNums();
    });
    $("#y2").change(function() {
        var oldVal = $("#y2slider").slider("value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < -50 || newVal > 50) {
            $("#y2").val(oldVal);
        } else {
        $("#y2slider").slider("value", newVal);
        }
        submitNums();
    });

})
