$(document).ready(function(){
    $('#btnb').click(function(){
        $('#btn').bind("click",bindalert);
        $('#status').html("Event binded viewdata");
    })
    $('#btnub').click(function(){
        $('#btn').unbind("click",bindalert);
        $('#status').html("Event unbinded viewdata");
    })
});

function bindalert(){
    alert("Button view data is binded");
}