<script>

 $(".box div:gt(0)").hide();
setInterval(function(){
   $(".box div:first-child").fadeout().next().fadeIn().end().appendTo(".box");
},1000);
</script>