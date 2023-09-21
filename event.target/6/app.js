// Записать в результат удвоенное значение инпута. Добавить проверки 

let btn = document.getElementById('dobleValueButton');
let inp = document.getElementById('myInput');

try{
    if(!isNaN) throw new Error('Введите число!');
    btn.addEventListener('click', function(){
        let result = inp.value * 2;
        console.log(result);
    })

}catch(error){
    console.log(error.Message)

}















