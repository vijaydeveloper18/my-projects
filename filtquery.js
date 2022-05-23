$(document).ready(function(){
    $("#btn1").click(function(){
        $('.sample p:gt(2').css(({"background":"pink"}));
        $('.sample p:not(p:eq(3))').css({"background":"pink"});
        $('.sample p:eq(4)').css({"background":"pink"});
    });
});