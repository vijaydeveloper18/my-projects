$(document).ready(function(){
    $(document).on('click','#submit',function(e){
        var isValid=true;
        $('input[type="text"]').each(function(){
            if($trim($(this).val())==' '){
                isValid=false;
                $(this).css({"color":"red"});
            }
            else{
                $(this).css({"color":" "});
            }
        })
    })
})