// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

document.querySelector('button').addEventListener('mouseover', () => {
    const div = document.querySelector('div');
    div.innerHTML = 'Hi';
});



document.querySelector('button').addEventListener('mouseout', () => {
    const div = document.querySelector('div');
    div.innerHTML = '';
});