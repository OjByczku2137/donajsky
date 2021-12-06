var rocket = document.getElementById('rocket');
var duzydym = document.getElementById('bigsmoke');
var flag = document.getElementById('flag');
var astronaut2 = document.getElementById('astronaut2');
var number = 0.09;
window.addEventListener('scroll', function(){
    var scrollpos = window.scrollY;
    if (scrollpos < 3350){
    if (scrollpos > 1800){
        rocket.style.top = 137 + scrollpos * number + '%';
    }
    if (scrollpos > 3330){
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

window.addEventListener('scroll', function(){
    var scroll = window.scrollY;
    var rakieta = document.getElementById('animation');
    var dym = document.getElementById('animation-smoke');
    if(scroll > 2050){
        dym.classList.add("dym");
        rakieta.classList.add("animacja");
    }
});