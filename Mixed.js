function timetomix(name){
    switch(name){
        case 'pure strawberry Joy':{
            return 0.5;
        }
        case 'Energizer':
        case 'Green garden':{
           return 1.5;
        }
        case 'Tropical island':{
            return 3;
        }
        case 'All or nothing':{
            return 5;
        }
        default:{
            return 2.5;
        }
    }
}
const limesize = {
    small:6,
    medium:8,
    large:10
}
function limescut(wedgesNeeded,limes){
    let limescut=0;
    while(wedgesNeeded > 0 && limes.length > 0){
        limescut++;
        wedgesNeeded -= limesize(limes.shift());
    }
    return limescut;
}
function remainingorder(timeleft,order){
      while(timeleft > 0 && order.length > 0){
        timeleft -= timetomix(order.shift());
      }
      return order;
}