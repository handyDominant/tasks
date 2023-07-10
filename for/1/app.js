// 1. Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]


//   берем значения  у польщователя
const inputUser = prompt('Введите значение, пожалуйста: ');




//   проверяем число: четное или нет
if (!isNaN(inputUser)) {
    let number = parseInt(inputString);
    console.log("Это число.");

    if (Number(number) % 2 == 0) {
        console.log('Это число: ${inputUser}, оно четное');

    } else if (Number(number) % 2 != 0) {
        console.log('Это число: ${inputUser}, оно не четное');
    };

    //  проверяем строку
} else if (inputUser === String(inputUser)) {
    console.log(inputUser.split(''));

} else {
    console.log('Некоректный ввод, пожалуйста, нажмите F5.');
}



