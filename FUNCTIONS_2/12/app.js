// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае


function isPalindrome(str) {
    // Удаляем все пробелы из строки и приводим к нижнему регистру
    let cleanedStr = str.replace(/\s/g, '').toLowerCase();
    
    // Переворачиваем строку
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    // Сравниваем исходную и перевернутую строки
    return cleanedStr === reversedStr;
}

let inputString = "level";
let result = isPalindrome(inputString);

if (result) {
    console.log("Это палиндром.");
} else {
    console.log("Это не палиндром.");
}





