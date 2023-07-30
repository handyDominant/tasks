// 12. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while

let inputUser = [2, 5, 9, 15, 0, 4];
let clearInputUser = [];
let i = 0;

while (i < inputUser.length){
    if (inputUser[i] % 5 === 0){
        clearInputUser.push(inputUser[i]);
    }
    i++
}

console.log(clearInputUser);



