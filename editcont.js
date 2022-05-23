$(document).ready(function(){
    $('#btn1').click(function(){
        var paragraph=$("<p>");
        paragraph.append("<h1>Hello</h1");
        $('#id1').html(paragraph);
    });
    $('btn2').click(function(){
        $('#id2').prepend("<h1>This is crazy</h1>");
    });
    $('#btn3').click(function(){
        $('.class1').html("<h1>This awesome</h1>");
    });
    $('#btn4').click(function(){
        $('.class2').html("<h1>Sample</h1>");
    });
});