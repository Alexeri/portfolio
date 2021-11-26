const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-bars'></i>";
    } else {
      menu.classList.add("active");
      toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-xmark'></i>";
    }
  }
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);







let atScroll = false;
let parallaxTitle = document.querySelectorAll(".parallax-title");
let parallaxTitle2 = document.querySelectorAll(".parallax-title2");

const scrollProgress=()=>{
    atScroll = true;
};
const raf=()=>{
    if(atScroll){
        parallaxTitle.forEach((element, index)=>{
            element.style.transform="translateX("+window.scrollY/9+"%)";
        });
        parallaxTitle2.forEach((element, index)=>{
            element.style.transform="translateX("+window.scrollY/-9+"%)";
        });
        atScroll=false;
    }
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);

window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active2');
    }
    else {
      reveals[i].classList.remove('active2');
    }
  }
}

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".work-sec-img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach(preview =>{
  preview.addEventListener('click', ()=>{
    modal.classList.add("open");
    original.classList.add("open");
    const originalSrc=preview.getAttribute("data-original");
    original.src=`./img/${originalSrc}`;
    const altText=preview.alt;
    imgText.textContent=altText;
  })
})



modal.addEventListener('click', (e)=>{
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
    original.classList.remove("open");
  }
})
