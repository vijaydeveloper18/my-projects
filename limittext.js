$(document).ready(function(){
    $("#txt").keydown(function(e){
        var max=10;
        var left=max-total;
        $('p').html("Remain: "+left);
        if(total>=max && e.keycode!=8){
            e.preventdefault();
        }
    });
});