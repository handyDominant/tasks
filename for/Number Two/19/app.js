
// 19. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

let inputUser = prompt('Введите число!');
let valueUsers = [];

for (i = 0; i < inputUser; i++) {
    let inputUserItems = prompt('Введите значение!');
    if(isNaN(inputUserItems)){
        valueUsers.push(inputUserItems);
    }
}

console.log(valueUsers)
