
/******Changement de theme */
const toggleTheme = document.querySelector("#themeToggle");
const btnLight= document.querySelector(".themeLight");
const btnDark= document.querySelector(".themeDark");

toggleTheme.addEventListener("click", function (){
  document.body.classList.toggle("light-mode");
  btnDark.classList.toggle("activated")
  btnLight.classList.toggle("activated")
});

/*****gestion de notre header */


const header = document.getElementById("headMaster");

// je place dans une variable le scroll vertical de notre page
let lastScroll = window.scrollY;
document.addEventListener("scroll", ()=>{
  const currentScroll = window.scrollY;

  if (lastScroll > currentScroll){
    header.style.transform = "translateY(0px)";
  }else{
    header.style.transform = "translateY(-100%)";
    hamburger.classList.remove("transformed");
    navbar.classList.remove("transformed");
    logo.classList.remove("transformed");
};
lastScroll = currentScroll;
});




//responsive nav et menu burber
const hamburger = document.querySelector(".burber");
const navbar = document.querySelector (".partieD")
const logo = document.querySelector (".partieG")


hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("transformed");
  navbar.classList.toggle("transformed");
});


//Event qui fait disparaitre le menu burger lorsqu'on clique sur un lien de la nav
const navLink = document.querySelectorAll(".navLink");
  navLink.forEach(function(nav){
    nav.addEventListener('click',()=>{
      hamburger.classList.remove("transformed");
      navbar.classList.remove("transformed");
  });
});



//Carousel de mes travaux.

const slides = document.querySelectorAll(".slide");


slides.forEach ((slides, indx) =>{
  slides.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

let maxSlide = slides.length -1;


const nextSlide = document.querySelector (".btn-next");

nextSlide.addEventListener("click", function(){
  if (curSlide === maxSlide){
    curSlide = 0;
  } else {
    curSlide++;
    
  }

  slides.forEach ((slide, indx)=>{
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function (){
  if (curSlide === 0){
    curSlide = maxSlide;
  }else{
    curSlide--;
  }
  slides.forEach((slide,indx)=>{
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});



//ma timeline
// gestion des apparitions de chaque texte 

function reveal() {
  var reveals = document.querySelectorAll(".apparition");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 500;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
     } /*else {
       reveals[i].classList.remove("active");
     }*/
  }
}
window.addEventListener("scroll", reveal);

//gestion de la progress bar de la timeline

const progress = document.querySelector('.progressBar');
const section = document.querySelector('.contentTime');

const scrollProgressBar = ()=>{
	let scrollDistance = -(section.getBoundingClientRect().top);
	let progressPercentage= (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight))*100;
	let val = Math.floor(progressPercentage)
	progress.style.height = val + '%';
		if (val < 0){
			progress.style.height = '0%';
		} else if (val > 100){
		progress.style.height = '100%';}
	}


document.addEventListener('scroll',scrollProgressBar);


/***Twitch */
var options = {
  autoplay:false,
  width: "100%",
  height: 480,
  channel: "captainzeinn",
  // Only needed if this page is going to be embedded on other websites
  parent: ["localhost"]
};
var player = new Twitch.Player("SamplePlayerDivID", options);
player.setVolume(0.3);





//Fonction en dessous pourconnecter la nav aux différentes parties du document. 
//let section = document.querySelectorAll("section");
// let menu = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   section.forEach((i) => {
//     let top = window.scrollY;
//     let offset = i.offsetTop - 150;
//     let height = i.offsetHeight;
//     let id = i.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       menu.forEach((link) => {
//         link.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };
