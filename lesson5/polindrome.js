function isPalindrome (word){
function reverse (word){
    let array = word.split('');
    let wordArray=[];
         for (i=array.length-1;i>=0;i--) wordArray.push(array[i]);
         return wordArray.toString().replaceAll(',','')
    }
    let a = reverse (word)
    if (a===word) {
        console.log ('Provided word is palindrome');
    }
    else console.log ('Provided word is not palindrome')
}
    
  isPalindrome('rotator')
  isPalindrome('roTaTor')
  isPalindrome('rotAtor')
  isPalindrome('rOtator')
  isPalindrome('RotAtor')