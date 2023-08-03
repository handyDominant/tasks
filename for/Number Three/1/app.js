// 1. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

let itemsUser = [];

for (i=0; i<5; i++){
    let inputUser = ('Введите, пожалуйста, значение!');
    if(!isNaN(parseFloat(inputUser) && isFinite(inputUser))){
        itemsUser.push(inputUser);
    }
}

let numberErray = itemsUser.filter(function(items){
    return typeof items === 'number';
});

console.log(numberErray.length === 0 ? 'массив пуст': numberErray);



