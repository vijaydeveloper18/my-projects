$(document).ready(function(){
    $('btn1').click(function(){
        if($('#m').is(":checked")){
            $('out').html("Male selected");
        }else if($('#f').is(":checked")){
            $('out').html("Female selected");
        }
    });
});