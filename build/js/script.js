const btn = document.querySelector('.btn_menu');
const nave = document.querySelector('.nav-principal');

btn.addEventListener('click', () =>{
    nave.classList.toggle('show')
});