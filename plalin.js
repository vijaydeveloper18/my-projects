function checkpalin(string){
    const arrayvalues=string.split('');
    const revvalues=arrayvalues.reverse();
    const revstring=revvalues.join('');
    if(string===revstring){
        console.log("It is a palindrome");
    }else{
        console.log("It is not a palindrome");
    }
}

const string=prompt("Enter a string");
checkpalin(string);