// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]


function transformationWords(inputUser) {
    let words = inputUser.filter(function(word) {
        return word.length <= 2;
    });
    return words;
}

let inputUser = ['by', 'belarus', 'de', 'ru', 'germany'];

console.log(transformationWords(inputUser));











