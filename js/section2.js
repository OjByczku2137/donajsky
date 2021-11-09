let rocket = document.getElementById('rocket');
let duzydym = document.getElementById('bigsmoke');
let flag = document.getElementById('flag');
let astronaut2 = document.getElementById('astronaut2');
const number = 0.09;
window.addEventListener('scroll', function(){
    let scrollpos = window.scrollY;
    if (scrollpos < 3350){
    if (scrollpos > 1800){
        rocket.style.top = 137 + scrollpos * number + '%';
    }
    if (scrollpos > 3290){
        duzydym.style.opacity = 1;
    }
    else{
        duzydym.style.opacity = 0;
    }
    if (scrollpos >= 3330){
        flag.style.opacity = 1;
    }
    else{
        flag.style.opacity = 0;
    }
    if (scrollpos >= 3330){
        astronaut2.style.opacity = 1;
    }
    else{
       astronaut2.style.opacity = 0;
    }}
    
});