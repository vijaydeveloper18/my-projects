$(document).ready(function(){
    $("#panel").slideup("slow");
    $("#flip").click(function(){
        $("#panel").slidetoggle("fast");
    });
});