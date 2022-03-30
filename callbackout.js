$(document).ready(function(){
    $('#btn').click(function(){
        $('.box1').animate({left:'400px'});
        $('.box1').fadeout(1000);
        $('box1').html("Without callback").fadein(1000);
    });
});