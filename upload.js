function validate(){
    var txt=file.substr(file.indexof('.')+1);
    var allow=["Jpg","Jpeg","Png","Gif","bmp"];
    if(allow.lastIndexOf(txt)==-1){
        $(".err").html("upload Image only").addclass("er").removeclass("crr");
        $("#file").val(" ");
    }else{
        $(".err").html("correct Image").addclass("crr").removeclass("er");
    }
}