// 6. На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если заканчивается,
// то вывести true, в противном случае false


let inputUser = 'Введите, пожалуйста, значение: .com'
// let inputUser = Number(9);
// let inputUser = parseFloat(9.0);


console.log(inputUser.includes('.com') || inputUser.includes('.ru'));











