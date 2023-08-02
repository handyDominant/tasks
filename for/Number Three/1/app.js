// 1. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

let itemsUser = [];
for (i=0; i<5; i++){
    let inputUser = prompt('Введите значение');
    if(!isNaN(inputUser){
        itemsUser.push(inputUser);
    }
}if (itemsUser === []){
    console.log('Массив пуст')
}else{
    console.log(itemsUser);
}





