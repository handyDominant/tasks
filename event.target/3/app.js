// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 


const btn = document.querySelector('button');
const inp = document.querySelector('input');

btn.addEventListener('dblclick', function () {

    if (!/^[a-zA-Z0-9\-\_\.]+@[a-zA-Z]+\.[a-zA-Z]+$/gm.test(inp.value)) {
        btn.style = 'background-color:red';
    } else {
        btn.style = 'background-color:green';
    }
})











