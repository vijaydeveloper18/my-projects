$(document).ready(function(){
    $("#btn1").click(function(){
        $("para1").animate({"left":"200px"},{"top":"30px"}).css({"color":"skyblue"}).animate({"right":"250px"});
    });
});