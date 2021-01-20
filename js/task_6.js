// Напиши скрипт, который бы при потере фокуса на инпуте, 
//проверял его содержимое на правильное количество символов.
    
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.

// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
 
// Для добавления стилей, используй CSS-классы valid и invalid.



const validatorRef = document.querySelector('#validation-input');


validatorRef.addEventListener('blur', (event) => {

    const message = event.target.value;
    let arr = message.split('');
    console.log(arr.length);
  
    if (arr.length <= event.target.dataset.length) {
        validatorRef.classList.add('valid');

    } else {
        validatorRef.classList.add('invalid')
    }
});
