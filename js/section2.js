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


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}   