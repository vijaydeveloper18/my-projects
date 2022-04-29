$(".box").on('click','.header',function(){
    $(this).toggleclass("active").next().slidetoggle();
});