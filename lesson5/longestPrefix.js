// let a = ['hello', 'test', 'sgdh'];
// console.log (a.length===3)

function longestPrefix (inputArray){
     function shortest (inputArray) {
        let shortest = 'hyhyghyghhuihkjhbsdfsdfdsfdsfdsfweerwerewrerwrwererwerweijh3434hj34h3';
        if (inputArray.length===0) return console.log('Common prefix is not found. Array has no elements');
        if (inputArray.length===1) return shortest=inputArray[0];
        if (inputArray.length===2&&inputArray[0].length<inputArray[1].length) return shortest=inputArray[0];
        if (inputArray.length===2&&inputArray[0].length>=inputArray[1].length) return shortest=inputArray[1];
        else {
        for (let i=0;i<inputArray.length-1;i++){
            let currentWord = inputArray[i];
            let nextWord = inputArray[i+1];
        if (currentWord.length<nextWord.length&&currentWord.length<=shortest.length){
            shortest=currentWord;
            }
        else if (currentWord.length<nextWord.length&&currentWord.length>shortest.length){
            shortest=shortest;
            }
        else if(currentWord.length>nextWord.length&&nextWord.length<shortest.length){
            shortest=nextWord;
            }
        else shortest;
        }
        return shortest;
        }
    }
    let prefix = shortest(inputArray);
    for (i=0;i<=inputArray.length-1;i++) {
         if (inputArray[i].charAt(0)!=prefix.charAt(0)&&inputArray[i]!=prefix) return console.log('Common prefix is not found');
         if (inputArray[i].indexOf(prefix)!=0&&inputArray[i]!==prefix) prefix=prefix.slice(0, prefix.length-1);
         if (inputArray[i].indexOf(prefix)!=0&&inputArray[i]===prefix) prefix;
    }
    return prefix
}
console.log(longestPrefix(['apple','applause','application','appendix','appeal','approach','appig']))
console.log(longestPrefix(['dog','cat','moose']))
console.log(longestPrefix(['hole','holmes', 'holma','']))
console.log(longestPrefix(['cat','кіт', 'catastrophe','cup', 'mother', 'climate', 'brother', 'carriage']))
console.log(longestPrefix(['cat','catastrophe', 'carriage']))
console.log(longestPrefix(['кіт','кішка', 'кіш']))
console.log(longestPrefix(['catrige','catatonia','catastrophe','cato']))
console.log(longestPrefix(['Massive','Massage']))