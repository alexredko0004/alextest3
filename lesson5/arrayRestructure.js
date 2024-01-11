//Variant_1
let outputArray = [];
function comparer (...array) {
    for (i=array.length-1;i>=0;i--) 
        if (array[i]%2!=1) outputArray.push(array[i])
}
comparer(4845,4902,125,-7972,-1003,4581,834878,436992,112481,-6)
console.log (outputArray)

//Variant_2
let myArray = [];
let finalArray=[];
function viceVersa (...array) {
    for (i=array.length-1;i>=0;i--) {
        myArray.push(array[i])
    }
    return myArray
}
function getPaired (myArray) {
    for (i=0;i<myArray.length;i++){
    if (myArray[i]%2!=1) finalArray.push(myArray[i])
    }
}
getPaired(viceVersa(4845,4902,125,-7972,-1003,4581,834878,436992,112481,-6))
console.log (finalArray)

