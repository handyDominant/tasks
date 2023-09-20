// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
    const div = document.querySelector('div');
    div.innerHTML = 'Hi';
})

btn.addEventListener('mouseout', () => {
    const div = document.querySelector('div');
    div.innerHTML = ' ';
})