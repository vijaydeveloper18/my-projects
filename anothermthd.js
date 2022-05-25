function reverse(str){
    let rev_str="";
    for(let i=str.length-1;i>=0;i--){
        rev_str+=str[i];
    }
    return rev_str;
}
function is_palindrome(str){
    reverse_str=reverse(str);
    if(reverse_str===str){
        console.log("The given string is palindrome");
    }else{
        console.log("The given string is not palindrome");
    }
}
var test="mama";
is_palindrome(test);