let text = document.getElementById('text');
let planet1 = document.getElementById('planet1');
let planet2 = document.getElementById('planet2');
let planet3 = document.getElementById('planet3');
let button = document.getElementById('button');
let astronaut1 = document.getElementById('astronaut1');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
  let scrollpos = window.scrollY;
  text.style.top = 40 + scrollpos * -.1 + '%';
  button.style.marginTop = 40 + scrollpos * -1.8 + 'px';
  planet1.style.top = 0 + scrollpos * -.1 + '%';
  planet2.style.top = 0 + scrollpos * -.05 + '%';
  planet3.style.top = 0 + scrollpos * -.1 + '%';
  astronaut1.style.top = 0 + scrollpos * -.02 + '%';
  astronaut1.style.left = 0 + scrollpos * -.02 + '%';
})
