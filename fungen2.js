function* gen(i){
    yield i+1;
    yield i+2;
    yield i+3;
}
function* generator(i){
    yield i+1;
    yield* gen(i);
    yield i+10;
}
const a=generator(10);
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
