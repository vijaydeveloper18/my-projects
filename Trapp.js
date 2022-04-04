$(document).ready(function(){
    $('#btn1').click(function(){
        $('#mytable').append("<tr><td>"+$("#c1").val()+"</td><td>"
        +$("#c2").val()+"</td><td>"+$("#c3").val()+"</td><td>")
    })
})