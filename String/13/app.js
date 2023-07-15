// 13. Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.


let inputUser = 'xxxx-xx-xx'.split('-');

inputUser.reverse();

console.log(inputUser.join().replaceAll(',', '.'));
