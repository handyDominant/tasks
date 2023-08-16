// 10. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива


function checkNumber(array){
    let checkArray = array.every(function(item){
        return typeof item === 'number';
    })
    return checkArray
}

let array = [1,2,3,4,5];

if(checkNumber(checkArray)){
    function resultArray(array){
        let result = array.filter(function(item){
            return item % 2 === 0
        })
        return console.log(result)
    }
}else {
    console.log("Массив не состоит только из чисел.");
}