$(document).ready(function(){
    $("#btn").bind('click',add);
    $("#a").bind("keyup",changeme)
           .bind("focus",focus_evt)
           .bind("blur",blur_evt);
});
function focus_evt(){
    $("#status").html("you inside box");
}