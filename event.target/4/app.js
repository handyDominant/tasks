// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка


const btn = document.querySelector('button');
const div = document.querySelector('div');
let arr = [];

btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    try {

        if (!inp.value.trim()) throw new Error('Empty');
        if (isNaN(inp.value)) throw new Error('is letter');

        arr.push(inp.value);

        div.innerHTML = arr;

        inp.value = '';

        inp.style = 'border: 1px solid black';

    } catch (error) {
        alert(error.message);
        inp.style = 'border: 1px solid red';
    }
})










