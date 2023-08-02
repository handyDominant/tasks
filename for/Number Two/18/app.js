// 18. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt.


let inputUser = prompt('Введите число');
let itemsInput = [];



for( i = 0; i < inputUser; i++){
    var inputUsersItemsErray = prompt('Введите значение!');
    itemsInput.push(inputUsersItemsErray);
}
console.log(itemsInput);