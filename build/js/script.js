const btn = document.querySelector('.btn_menu');
const enlaces = document.querySelector('.nav-principal');

btn.addEventListener('click', ()=>{
    enlaces.classList.toggle('show');
});
   
