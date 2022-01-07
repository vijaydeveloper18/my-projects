day=6;
switch(true){
    case day>0 && day<6:
        console.log('Working days');
        break;
    case day==6 || day==7:
        console.log('Holidays');
        break;
        default:
            console.log('Which day are you choose?');    
}