// 10. На входе строка, необходимо убрать все лишние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на ввод
// только текстовых значений

let a = 'sdsqds';

if (a === String(a)){
    console.log(a.toLowerCase().trim().repeat(3))
}else{
    console.log('Ввденное значение не корректно!')
}
