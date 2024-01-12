function reverse (word){
let array = word.split('');
let wordArray=[];
     for (i=array.length-1;i>=0;i--) wordArray.push(array[i]);
     return wordArray.toString().replaceAll(',','')
}

console.log (reverse('Extinguisher'))
