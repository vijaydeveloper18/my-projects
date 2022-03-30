$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text:"+$('.box1').text());
    });
    $("#btn2").click(function(){
        alert("HTML tag:"+$('.box1').html());
    });
})