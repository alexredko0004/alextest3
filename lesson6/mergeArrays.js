//I'm not sure if I got the task right. That's why here I'm proposing two different solutions based on my understanding of the requirements. 
//I accept that neither of them can be correct one

//Variant_1
//In the solution below I'm placing num1 array values in asc order, then trimming num1 array to m length.
//The same thing I'm doing to num2, but trimming it to n length.
//Then simply pushing values from num2 to num1. And then placing the resulting array values in asc order

function arrays (num1,m,num2,n) {
    num1.sort(function(a, b) {
        return a - b; 
      });
    num1.splice(m)
    num2.sort(function(a, b) {
        return a - b; 
      });
    num2.splice(n)
    for (i=0;i<=n-1;i++) {
        num1.push(num2[i])
    }
    num1.sort(function(a, b) {
        return a - b; 
      });
    return num1
}

console.log(arrays ([4,22,5,7,2,1],4,[0,8,3,10,4,8,9,0,1,2,7,6],5))

//Variant_2
function arrays2 (num1,m,num2,n) {
    num1.splice(m)
    for (i=0;i<num2.length;i++)      //This loop I added in order to remove all 0 elements in num2 without using n (just to make the solution more general)
          if (num2[i]===0) num2.splice(num2.indexOf(num2[i]))
    for (i=0;i<=n-1;i++) {
        num1.push(num2[i])
    }
    num1.sort(function(a, b) {
        return a - b; 
      });
    return num1
}
console.log(arrays2 ([1,3,5,6,0,0,0,0,0,0,0],4,[2,4,6,8,10,0,0,0,0,0,0],5))