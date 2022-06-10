$(document).ready(function(){
  $('#icon').click(function(){
     $('.hold').toggle(250);
  });
});

$(document).ready(function(){
 var btn=document.getElementById('btn');
 btn.addEventListener('click',function(){
  swal("Your message has been sent..");
  clear();
 });
});
function clear(){
  var btn=document.getElementById('btn').value;
  btn.value.remove();
}



