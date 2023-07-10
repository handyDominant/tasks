// 3. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

let inputUser = 'Введите, пожалуйста, значение: ';
// let inputUser = Number(9);
// let inputUser = parseFloat(9.0);

console.log(inputUser === parseFloat(inputUser) && Number(inputUser) ? 
            console.log('ошибка ввода') : 
            console.log(inputUser.toLowerCase().trim()));



// if (inputUser === String(inputUser)){
//     console.log(inputUser.toLowerCase().trim());

// }else if (inputUser === Number(inputUser)){
//     console.log('Ошибка ввода');
// } 










