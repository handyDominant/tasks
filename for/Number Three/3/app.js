// 3. На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3.

let inputUser = 3030202030;
var logInformation = [];

// Преобразуем inputUser в строку, чтобы можно было обращаться к его цифрам
inputUser = inputUser.toString();

for (let i = 0; i < inputUser.length; i++) {
    if (inputUser[i] === '3') {
        logInformation.push(inputUser[i]);
    }
}


console.log(logInformation.join());








