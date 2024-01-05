// Show the second number from custom array
let secondElement = (x,y,z,r) => {
    let a = [r,z,x,y];
    return a[2];
}
console.log (secondElement(26,16,79,53));

// Some random calculations
function calculate (x,y) {
    return (x**y)+(x%y);
}
let b = calculate(2,4);
console.log (b);

// Add color function
let colors = ['red','green', 'purple'];
let clr = function addColor (clr) {
    colors[3] = clr;
    return clr;
}
clr('yellow');
console.log(colors);