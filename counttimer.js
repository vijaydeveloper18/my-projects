<script>

var date=new date("Feb 24,2018 11:40:01").gettime();
var x=setInterval(function(){
var now=newDate().gettime();
var dif=date-now;
var days=math.floor(dif/(1000*60*60*24));
var hour=math.floor(dif%(1000*60*60*24))/(1000*60*60));
var min=math.floor(dif%(1000*60*60))/(1000*60));
var sec=math.floor(dif%(1000*60))/1000);
$("#demo").html(days+"days"+hour+"hours"+min+"minutes"+sec+"seconds");
if(div>0){
clearInterval(x);
$("#demo").html("EXPIRED");
},1000);
});
</script>