function resizewin(){
    var wid=window.outerWidth;
    var hig=window.outerHeight;
    var siz="Width: "+wid+"Height:  "+hig;
    document.getElementById('display').innerHtml=siz;
}
function unloadfun(){
     alert("bye");
}
function loadfun(){
    alert("Page is loaded successfully");
}