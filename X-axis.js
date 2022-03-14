$(document).ready(function(){
    $("#bdy").bind("mousemove",windowaxis);
});
function windowaxis(event){
    $("#x").html("x-axis: "+event.screenx);
    $("#y").html("y-axis: "+event.screeny);
}
