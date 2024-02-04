let submit = document.querySelector('[submit]'),
    input = document.querySelector('[input]'),
    errors = document.querySelectorAll('[error]');

submit.addEventListener('click', () => {
    let check = /@gmail.com/;
    if (input.value.match(check) && input.value.length >= 18) {
        alert('Sent successful');
    } else {
        for (let i = 0; i < errors.length; ++i) {
            errors[i].classList.add('show');
        }

        input.classList.add('error');

        input.value = '';
    }
});

input.addEventListener('click', () => {
    for (let i = 0; i < errors.length; ++i) {
        errors[i].classList.remove('show');
    }

    input.classList.remove('error');
});