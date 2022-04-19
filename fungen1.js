function* generator(i){
    yield i+0;
    yield i+11;
    yield i+20;
}
const a=genertor(10);
console.log(a.next());
console.log(a.next());