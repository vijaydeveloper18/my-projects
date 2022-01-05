var month=Prompt("Enter the month");
for(var days=1;days<=31;days++){
    if((Month==4||month==6||month==7||month==11)&&days==31)continue;
    console.log("Days:",days);
    if(month==2&&days==28)break;
}