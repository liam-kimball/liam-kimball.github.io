$(document).ready(function() {
    $("#my_form").validate( {
        rules: {
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
        messages: {
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