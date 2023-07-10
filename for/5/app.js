// 5. Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы

let inputUser = 'введите, пожалуйста, значение: ';
// let inputUser = Number(9);
// let inputUser = parseFloat(9.0);

if (inputUser === !String(inputUser)){
    console.log('Ошибка ввода');
} else {
    console.log(inputUser[0].toUpperCase() + inputUser.slice(1).trim());
}










