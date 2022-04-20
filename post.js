$("#save").click(function(){
    var name=$("#name").val();
    var age=$("#age").val();
    var mail=$("#mail").val();
    $.post("db.php",{na:name,ag:age,ma:mail},function(data){
        alert(data);
        $("#frm")[0].reset();
    });
});
