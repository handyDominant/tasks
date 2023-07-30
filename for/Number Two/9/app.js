// 9. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

let inputUser = [2, 5, 9, 15, 0, 4];
let newListInputUser = 0;
let errayInputUser = [];

for(newListInputUser of inputUser){
    if(newListInputUser % 3 === 0){
        errayInputUser.push(newListInputUser)
    }
}

console.log(errayInputUser)