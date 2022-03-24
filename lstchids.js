$(document).ready(function(){
    $("h2:first").css("color","red");
    $("h2:last").css("color","blue");
    $("p span:first-child").css({
        "color":"orange",
        "font-weight":"bold"
    });
    $("p span:nth-child(3)").css({
        "color":"blue",
        "font-weight":"bold"
    });
});