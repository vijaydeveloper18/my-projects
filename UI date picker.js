$(document).ready(function(){
    $("#datepicker").datepicker({
        changeMonth:true,
        changeYear:true,
        dateFormat:"yy-mm-dd",
        beforeShowday:$.datepicker.noWeekends,
    });
});