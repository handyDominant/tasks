// 13. Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of


let inputUser = [-1, 2, -6, 15];
let itemsInputUser = 0;
let errayInputUser = [];
let clearErrayInputUser = 0;

for(itemsInputUser of inputUser){
    if(itemsInputUser >= 1){
        errayInputUser.push(itemsInputUser);
    }
}

for(itemsInputUser of errayInputUser){
    clearErrayInputUser += itemsInputUser            
}

console.log(clearErrayInputUser);










