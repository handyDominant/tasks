// 16. На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false


let inputUser = 'Chris Alan'.split(' ');


if (inputUser[0][0] === inputUser[0][0].toUpperCase() && inputUser[1][0] === inputUser[1][0].toUpperCase()){
    console.log('true');
} else{
    console.log('false');
}