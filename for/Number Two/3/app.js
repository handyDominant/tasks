// 3. Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.


 let inputUser = [2, 3, 4, 5];
 let itemsUser = 1;

// for (i = 0; i < inputUser.length; i++){
//     itemsUser *= inputUser[i];
// }
// console.log(itemsUser);

let i = 0;

while(i < inputUser.length){
    itemsUser *= inputUser[i];
    i++
}
console.log(itemsUser);






