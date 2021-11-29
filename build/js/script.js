let navegacion = document.querySelector('.nav-principal');
let navItem = document.querySelectorAll('.nav-item a');

console.log(navItem);
navItem.forEach (item =>{
    
    if(item.className === 'active'){
        //console.log(`tiene la calse ${item.classList}`);
        item.classList.add('active');
    }else{
        item.classList.add('active');
        //console.log('no tiene clase');
    }
    
});
/* console.log(item.classList.contains('active')); */
   
