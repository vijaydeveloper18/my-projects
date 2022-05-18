$(document).ready(function(){
    $("#reg").keyup(function(){
        var reg=$(this).val();
    });
    $.post("getdetails.php",{re:reg},function(data){
         $("p").html(data);
         var res=Json.parse(data);
         if(res.error==1){
             $("p").html("No records");
             $("#name").val();
             $("#city").val("");
         }
         else if(res.error==0){
             $("#name").val(res.name);
             $("#city").val(res.city);
             $("p").html("Records found");
    }
});
});