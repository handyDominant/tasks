// 14. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

let inputUser  = [10, 20, 30, 50, 235, 3000].toString().split(',');
let helpFileInputUser = [];
let itemsInputUser = [];

for(helpFileInputUser of inputUser){   // перебираем массив
   if(helpFileInputUser[0] === '1' ||  // проверяем на 1
      helpFileInputUser[0] === '2' ||  // проверяем на 2
      helpFileInputUser[0] === '5'){   // проверяем на 5

         itemsInputUser.push(helpFileInputUser);   // добавляем результат в переменную
   }
} console.log(itemsInputUser)



