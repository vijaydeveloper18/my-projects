var marks=[5];
marks[0]=95;
marks[1]=46;
marks[2]=57;
marks[3]=78;
marks[4]=82;
var i;sum=0;
for(i=0;i<marks.length;i++){
    sum += i;
    document.write('Total marks: '+sum);
}