const body = document.querySelector('body');
let color_btn = document.querySelector('.color-switch');
let color_text = document.getElementById('color-text');
let burger_btn = document.querySelector('.burger-toggle');
let nav_link = document.querySelector('.nav-link');


color_btn.onclick = ()=>{
    body.classList.toggle('color-mode');

    if(body.classList.contains('color-mode')){
        color_text.innerText = "Dark"
    }else{
        color_text.innerText = "Light"
    }
}

let txt = new Typed('.second-txt', {
    strings : ['Developer !','Designer !'],
    loop: true,
    typeSpeed: 150,
    backSpeed: 80,
    showCurser: true,
    cursorChar: '_',
});

burger_btn.onclick = ()=>{
    burger_btn.classList.toggle('active');
    nav_link.classList.toggle('active');
}

// navbar shadow effect 

window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.nav');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });