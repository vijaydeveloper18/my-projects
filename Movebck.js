$(document).ready(function(){
    var pixel=50;
    $("#box").mousemove(function(e){
        var width=$(this).innerwidth();
        var height=$(this).innerheight();
        var valuex=(e.pagex/width)*pixel;
        var valuey=(e.pagey/height)*pixel;
        $(this).css("Background-position:",valuex+'%'+valuey+'%');
    });
});