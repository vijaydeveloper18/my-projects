<script>

  $(document).ready(function(){
   $("a[href^='#']").click(function(e)){
     e.preventdefault();
      var pos=$(this).attr("href")).offset().top;
     $("body",html("").animate({
         scrollTop:position
},600);
}
}
</script>