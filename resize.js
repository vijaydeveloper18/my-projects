$(document).ready(function(){
    $(window).resize(win_resize);
});
function win_resize(){
    var h=$(window).height();
    var w=$(window).width();
    $("#status").html("Window height: "+h+"<br> window width: "+w);
}