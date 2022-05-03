$(document).ready(function(){
    $("#txt").keypress(function(e){
        if(e.which!=8 && e.which<48||e.which>57){
            $("#err").html("Digits only").show().fadeout("slow");
            return false;
        }
    });
});