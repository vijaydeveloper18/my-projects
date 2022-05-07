<script>

   $(document).ready(function(){
     $(window).scroll(function(){
          if($(this).scrollTop>100){
            $('.scrollup').fadeIn();
}else{
      $('.scrollup').fadeout();
}
});
    $('.scrollup').click(function(){
        $("html,body").animate({scrollTop:0},600);
});
});
</script>