$(".open").on("click",function(){
    $(".overlay,.box").addclass("active");
});
$(".close").on("click",function(){
    $(".overlay,.box").removeclass("active");
});