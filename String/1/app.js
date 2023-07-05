// 1. Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]



const inputUser = prompt('Введите значение, пожалуйста: ');
let valueUser = '';

if (inputUser === Number(inputUser)) {
    console.log('')

} else if (inputUser === String(inputUser)) {
    valueUser = inputUser.split('')
    console.log(valueUser)
}
