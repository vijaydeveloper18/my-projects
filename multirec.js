$(document).ready(function(){
    $("#del").click(function(){
        if(confirm("Are you sure to delete")){
            var id=[];
            $(':checkbox:checked').each(function(){
                id[i]=$(this).val();
            });
            if(id.length===0){
                alert("Select the record to delete");
            }else{
                $.ajax({
                    URL:"del.php",
                    type:"post",
                    data:{id:id},
                    success:function(data){
                        for(var i=0;i<id.length;i++){
                            $('tr#'+id[i]+'').remove();
                        }
                    }
                });
            }
        }
        else{
            return false;
        }
    })
})