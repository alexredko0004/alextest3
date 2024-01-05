//Square number
function square(number) {
    return number*number;
}
let x2 = square (8);
console.log (x2);

// Increment number
function increment (a) {
    return ++a
}
console.log(increment(10));

// Discriminant
function disc (a,b,c) {
    let d = b*b-4*a*c;
    return d;
}
console.log ('Your discriminant is '+ disc(14,20,5))