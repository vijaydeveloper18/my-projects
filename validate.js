$(document).ready(function(){
    $.validator.setDefaults({
        submitHandler:function(){
            alert("submitted");
        }
    });
    $(".form-group").validate({
         rules:{
             input:"Required",
             mail:{
                 required:true,
                 mail:true
             },
             contact:{
                 required:true,
                 digits:true,
                 maxlength:10
             },
             txt:{
                 required:true
             }
         },
         messages:{
             input:"Name should be 10 characters",
             mail:{
                 required:"Email is required",
                 mail:"Enter valid email"
             },
             contact:{
                 required:"contact is required",
                 maxlength:"contact must be 10 digits",
                 minlength:"contact must be 10 digits"
             },
             txt:"Comments is required"
         }
    });
});