// 11. У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива


let inputUser = ['Привет', ' ', 1, 2, 3, ['Мир!']];
let clearInputItemsUser = [];


for (i = 0;i < inputUser.length; i++){
    if (Number.isFinite(inputUser[i])){
        clearInputItemsUser.push(inputUser[i])
    }
}

console.log(clearInputItemsUser);