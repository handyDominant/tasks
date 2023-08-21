// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае


function transformationWords(inputUser_) {

    let words = inputUser_.every(function (result) {
        return typeof result === "number";
    });
    return words 
}


let inputUser_ = [1, 2, 3, 4, 5];
console.log(transformationWords(inputUser_));







