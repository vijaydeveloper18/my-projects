<script>

   $(document).ready(function(){
     $('.tabs li').click(function(){
        $('.tabs li').removeclass('active');
          $('.content').removeclass('active');
	var tid=$(this).attr('tab');
	$(this).addclass('active');
	$("#"+tid).addclass('active');
});
});
</script>