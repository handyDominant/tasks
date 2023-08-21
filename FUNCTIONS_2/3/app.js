// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае


function checkItems(mail){
    let isValued = mail.includes('@') && mail.includes('.com') || mail.includes('.ru');
    return {
        mail: mail,
        active: isValued
    };
}

let userEmail = 'vo7by@mail.ru';
let result = checkItems(userEmail);
console.log(result);




