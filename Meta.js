var accdetails='INDBNK 78728341890 SB';
var char1=/\d/g;
var char2=/\s/g;
var char3=/0\b/;
document.write("Digits:",accdetails.match(char1));
document.write("White space:",accdetails.match(char2));
document.write("Ending:",accdetails.search(char3));