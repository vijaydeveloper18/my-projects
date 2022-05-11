<script>

   $(document).ready(function(){
       $("#btn").click(function(){
           var value=$('input[name=sub]:checked').val();
         $('p').html("<br>Selected radio button value is:<b>'+value+</b>);
}
}
</script>