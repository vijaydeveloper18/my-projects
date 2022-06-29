function totalbird(perday){
    const days=perday.length;
    let count=0;
    for(let i=0;i<days;i++){
        count += perday[i];
    }
    return count;
}
function birdsInweek(perday,week){
    const startday=(week-1)*7;
    const endDay=startday+7;
    let count=0;
    for(let i=startday;i<endDay;i++){
         count += perday[i];
    }
    return count;
}
function fixbirdcountlog(perday){
    const days=perday.length;
    for(let i=0;i<days;i+=2){
        perday[i] += 1;
    }
    return perday;
}