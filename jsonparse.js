$(document).ready(function(){
    $("#reg").keyup(function(){
        var reg=$(this).val();
        $.post("getdetails.php",{re:reg},function(data){
            $("p").html(data);
            var res=JSON.parse(data);
            if(res.ERROR==1){
               $("p").html("No records");
               $("#name").val();
               $("#city").val(" ");
            }else if(res.ERROR==0){
                $("#name").val(res.NAME);
                $("#city").val(res.CITY);
                $("p").html("records found");
            }
        });
    });
});