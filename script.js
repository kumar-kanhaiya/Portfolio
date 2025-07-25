// function toggleTheme() {
//       document.body.classList.toggle('dark-theme');
//     }

let body = document.querySelector("body");
let button = document.querySelector(".ok");
let navbar = document.querySelector(".navbar");

button.addEventListener("click", () => {
  if (body.style.backgroundColor === "white" || body.style.backgroundColor === "") {
    body.style.backgroundColor = "#555";
    body.style.color = "white";
    navbar.style.backgroundColor = "#555";
    navbar.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";
  }
});

var typed = new Typed(".typed-text", {
  strings: ["A Frontend Developer", "A Backend Developer", "A Android Developer" , "A DSA Enthusiast"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let icon = document.getElementById("iconmoon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "images/sun.png";
  }else{
    icon.src = "images/moon.png"
  }
}

