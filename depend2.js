$("#country").change(function(){
    cid=$(this).val();
    $.post("state.php",{id:cid},function(data){
        $("#state").html(data);
    });
});