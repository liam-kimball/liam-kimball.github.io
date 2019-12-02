$(document).ready(function() {
    $("#my_form").validate( {   
        rules: {                                            //rules for valid imputs of x1, x2, y1, y2s
            x1: {
                required: true,
                range: [-100, 100]
            },
            x2: {
                required: true,
                range: [-100, 100]
            },
            y1: {
                required: true,
                range: [-100, 100]
            },
            y2: {
                required: true,
                range: [-100, 100]
            } 
        },
        messages: {                                         //messages for invalid inputs
            x1: {
                required: "A number is required.",
                range: "Try something between -100 & 100"
            },
            x2: {
                required: "A number is required.",
                range: "Try something between -100 & 100"
            },
            y1: {
                required: "A number is required.",
                range: "Try something between -100 & 100"
            },
            y2: {
                required: "A number is required.",
                range: "Try something between -100 & 100"
            },
        }
    });
  });