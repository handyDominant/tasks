// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае


function isAnagram(str1, str2) {
    // Удаляем все пробелы из строк и приводим к нижнему регистру
    let cleanedStr1 = str1.replace(/\s/g, '').toLowerCase();
    let cleanedStr2 = str2.replace(/\s/g, '').toLowerCase();
    
    // Сортируем символы в обеих строках и сравниваем их
    return cleanedStr1.split('').sort().join('') === cleanedStr2.split('').sort().join('');
}

let inputString1 = "listen";
let inputString2 = "silent";
let result = isAnagram(inputString1, inputString2);

if (result) {
    console.log("Это анаграмма.");
} else {
    console.log("Это не анаграмма.");
}
