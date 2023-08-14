// 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. 
// Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach


let errayUserOne = [];
let filteredArray = [];

for (i = 0; i < 5; i++) {
    inputUser = prompt('Введите значение!');
    errayUserOne.push(inputUser);
};

for (i = 0; i < 2; i++) {
    inputUser = prompt('Введите значение!');
    errayUserOne.forEach(function(value) {
        if (!isNaN(value)) {
          filteredArray.push(value);
        }
    });
};

if (filteredArray.length === 0) {
    console.log('Массив пуст');
  } else {
    console.log(filteredArray);
  }









