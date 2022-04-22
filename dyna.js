$(document).ready(function(){
    $("#add").click(function(){
        $("#tbl").append('<tr>Hello world');
    });
});
$(document).on('click','.del',function(){
      $(this).closest("tr").remove();
});