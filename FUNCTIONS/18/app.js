// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”. 


function formatDate(inputWords_) {
    let parts = inputWords_.split('/');
    
    if (parts.length !== 3) {
        console.log("Неверный формат даты. Используйте формат 'xx/xx/xxxx'.");
        return;
    }

    let year = parts[2];
    let month = parts[0].padStart(2, '0');
    let day = parts[1].padStart(2, '0');

    return `${year}-${month}-${day}`;
}

let inputDateString = '12/31/2023';
let formattedDate = formatDate(inputDateString);
console.log(formattedDate); // Вывод: 2023-12-31