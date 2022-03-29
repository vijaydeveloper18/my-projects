$(document).ready(function(){
    $('#btn1').click(function(){
        $('para1').html("<h1>This is heading tag</h1>");
    });
    $('#btn2').click(function(){
        $('para2').text("This is sample text");
    });
});