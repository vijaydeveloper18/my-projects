$(document).ready(function(){
    $("#p1").hover(function(){
        $('#p1').css({"background-color":"white"});
    })
    $("#p1").mouseleave(function(){
        $("#p1").css({"background-color":"blue"});
    })
})