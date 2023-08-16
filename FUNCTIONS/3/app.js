// 3. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

function transformationWords(inputWords) {
    let words = inputWords.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        result.push(words[i][0].toUpperCase() + words[i].substring(1));
    }

    return result.join(' ');
}

let inputWords = 'hschool company';
console.log(transformationWords(inputWords)); // "Hschool Company"






