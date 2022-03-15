$(document).ready(function(){
    $("td,th").css("padding","20px");
    $("#tab tr").mouseover(function(){
        $(this).addclass("over");
    });
    $("#tab tr").mouseout(function(){
        $(this).removeclass("over");
    });
});