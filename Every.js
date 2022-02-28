var marks=[35,15,56,70,56];
function check(){
    return value>34;
}
document.write("Array: ",marks);
document.write("Everymark: ",marks.every(check));
document.write("Somemark: ",marks.some(check));
document.write("List all: ",marks.filter(check));