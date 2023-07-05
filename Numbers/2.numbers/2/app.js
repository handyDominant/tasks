// 1. Найти максимальное число из 2 введенных (2 способа)


let a = prompt('Введите первое значение: ');
let b = prompt('Введите второе значение: ');

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log("Числа равны.");
}

let maxNumber = Math.max(a, b);

console.log("Максимальное число: " + maxNumber);