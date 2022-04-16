var accdetails='INDBNK 78782341890 SB';
var patt1=/[IND]/g;
var patt2=/[782]/g;
var patt3=/[7878|SB]/g;
document.write("patt1:",accdetails.match(patt1));
document.write("patt2:",accdetails.match(patt2));
document.write("patt3:",accdetails.match(patt3));
