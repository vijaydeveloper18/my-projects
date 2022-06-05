function toggle(str){
    var len=str.length;
     var found=str[i];
     for(var i=0;found<=len;found++){
     var regex1=/^[a-z]$/;
     var regex2=/^[A-Z]$/;
     if(regex1.test(found)){
        found.toUpper();
     }
     if(regex2.test(found)){
        found.toLower();
     }
  }
  console.log("Toggle: "+found); 
}
toggle('abcdE');