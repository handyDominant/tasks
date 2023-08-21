//  1. На входе число n. Напишите функцию, которая переворачивает число.


 function reverseWords (number){

      const reveseString = number.toString().split('').reverse().join('');

     return reveseString;
 }

 const inputUser = 12345;
 const result = reverseWords(inputUser);
 console.log(typeof result);



for(let i in result){
    var myLoveIHere = ['я','люблю ', 'тебя', 'до', 'гроба'];
    console.log(myLoveIHere[i]);
}





