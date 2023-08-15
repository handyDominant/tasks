// 15. На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное


const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const resultObject = {};

for (const number of numbersArray) {

  const isEven = number % 2 === 0;
  resultObject[number] = isEven;
}

console.log("Результирующий объект:", resultObject);