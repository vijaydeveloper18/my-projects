$(document).ready(function(){
    $("#content").append(function(){
        $.ajax({
            type:"GET",
            URL:"Books.hml",
            datatype:"xml",
            success:function(xml){
                $(xml).find("book").each(function(){
                    var title=$(this).find("title").text();
                    var publish=$(this).find("publisher").text();
                    $("<li></li>").html(title+","+publish).appendTo("#content ul");
                });
            }
        });
    });
});