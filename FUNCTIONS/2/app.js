// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
// happy new year -> happy NEW year


function transformationWords(inputWords) {
    let words = inputWords.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {  // Четные слова
            result.push(words[i].toLowerCase());
        } else {            // Нечетные слова
            result.push(words[i].toUpperCase());
        }
    }

    return result.join(' ');
}

let inputWords = 'happy new year';
console.log(transformationWords(inputWords));

