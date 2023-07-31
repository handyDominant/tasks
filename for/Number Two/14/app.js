// 14. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

let inputUser  = [10, 20, 30, 50, 235, 3000].toString().split(',');
let helpFileInputUser = [];
let itemsInputUser = [];

for(helpFileInputUser of inputUser){
   if(helpFileInputUser[0] === '1' || 
      helpFileInputUser[0] === '2' || 
      helpFileInputUser[0] === '5'){

         itemsInputUser.push(helpFileInputUser);
   }
} console.log(itemsInputUser)



