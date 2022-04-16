var name='rakesh';
var pattern=/h/;
document.write("Test:",pattern.test(name));
document.write("Execution:",pattern.exec(name));
var obj=/h/.exec("sweet home");
document.write("<br>",obj[0]," ",obj.index," ",obj.input);