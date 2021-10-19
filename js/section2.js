let rocket = document.getElementById('rocket');
let duzydym = document.getElementById('bigsmoke');
let flag = document.getElementById('flag');
let astronaut2 = document.getElementById('astronaut2');
const number = 0.09;
window.addEventListener('scroll', function(){
    let scrollpos = window.scrollY;
    if (scrollpos > 1800){
        rocket.style.top = 133 + scrollpos * number + '%';
    }
    if (scrollpos > 3100){
        duzydym.style.opacity = 1;
    }
    else{
        duzydym.style.opacity = 0;
    }
    if (scrollpos > 3200){
        flag.style.opacity = 1;
    }
    else{
        flag.style.opacity = 0;
    }
    if (scrollpos > 3200){
        astronaut2.style.opacity = 1;
    }
    else{
        astronaut2.style.opacity = 0;
    }
});