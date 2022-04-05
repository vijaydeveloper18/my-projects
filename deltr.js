$(document).ready(function(){
    $('#mytable').on('click','.del',function(){
        $(this).closest('tr').remove();
    });
});