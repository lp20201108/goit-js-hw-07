// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//     (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.


const userInput = document.querySelector('#font-size-control');
userInput.setAttribute('min', 12);
userInput.setAttribute('max', 60);

const text = document.querySelector('#text');

userInput.addEventListener('input', () => {
    text.style.fontSize = `${userInput.value}`;
    
});
