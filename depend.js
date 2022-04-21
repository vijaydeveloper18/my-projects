$("#cid").click(function(){
    alert($("#country")).val();
});
$("#cname").click(function(){
    alert($("#country option:selected").text());
});