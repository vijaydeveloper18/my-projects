$(document).ready(function(){
    $("#btn1").click(function(){
        $('.class2').next().html("<h2>Sample class</h2>");
        $('.sample').find('.class2').css({"background-color":"pink"});
    });
});