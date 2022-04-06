$(document).ready(function(){
    $("#sel").change(function(){
        var sheet=$(this).val();
        $("link").attr("href",sheet);
    });
});