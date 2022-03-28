$(document).ready(function(){
    $("btn1").click(function(){
        $(".box1").animate({right:'100px'});
        $(".box1").html("hello",function(){
            $(".box1").fadeout(1000);
        });
    });
});