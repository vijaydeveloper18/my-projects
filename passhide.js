$("#chk").click(function(){
    if($(this).prop(checked)){
        $("#pass").attr("type","text");
    }else{
        $("#pass").attr("type","password");
    }
})