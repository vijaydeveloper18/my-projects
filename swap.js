function swap(str){
    return str.replace (/^[a-z]+[A-Z]$/,function(match,chr){
        return chr ? match.toUppercase() : match.toLowercase();
    });
}
console.log(swap('AabCE'));