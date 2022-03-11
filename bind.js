function bind(){
    this.bind('click',onchange);
    this.bind('click',onkeyup);
}
function onchange(){
    $("#status").html("Value corrected");
}
function onkeyup(){
    $("#status").html("Value incorrect");
}