// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка


const btn = document.querySelector('button');
const div = document.querySelector('div');
let arr = [];

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        arr.push(inp.value);

        div.innerHTML = arr;

    } catch (error) {
        alert(error.message);
    }
})










