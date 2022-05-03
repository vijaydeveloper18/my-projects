$(document).ready(function(){
    $("#box").on("context menu",function(e){
        alert("Right click disabled");
        return false;
    });
});