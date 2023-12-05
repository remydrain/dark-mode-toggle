const input = document.querySelector('.input');
const body = document.querySelector('body');

input.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();

function updateBody() {
    if(input.checked) {
        body.style.background = 'var(--black)';
    } else {
        body.style.background = 'var(--white)';
    }
}

input.addEventListener('input', () => {
    updateBody();
    updateLocal();
})

function updateLocal() {
    localStorage.setItem('mode', JSON.stringify(input.checked));
}