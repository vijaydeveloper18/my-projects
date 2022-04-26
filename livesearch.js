$(document).ready(function(){
    $("#txt").keyup(function(){
        var txt=$("#txt").val();
        if(txt!==''){
            $.post("search.php",{s:txt},function(data){
                $("#box").html(data);
            });
        }
    });
});