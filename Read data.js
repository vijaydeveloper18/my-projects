$(document).ready(function(){
    $("#btn").on('click',function(){
        var vals="";
        $("#mytable tr").each(function(){
            vals+=$(this).find("td:eq(1)").text()+" , ";
        });
        $("#out").html(vals);
    });
});