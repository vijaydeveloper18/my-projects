$(document).ready(function(){
    var unavailableDates=["9-3-2018","14-3-2018","15-3-2018"];
    function unavailable(date){
         dmy=date.getdate()+"-"+(date.getmonth()+1)+"-"+date.getfullyear();
         if($.inarray(dmy,unavailableDates==-1)){
               return [true," "];
         }else{
             return [false," ","Unavailable"];
         }
    }
    $("#datepicker").datepicker({
        changeMonth:true,
        changeYear:true,
        dateFormat:"yy-mm-dd",
        beforeShowDay:unavailable
    });
});