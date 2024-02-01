let submit = document.querySelector('[submit]'),
    input = document.querySelector('[input]');

submit.addEventListener('click', () => {
    if (input.value.length < 8) {
        alert('smaller than 8')
    } else {
        alert('bigger than 8')
    }  
});