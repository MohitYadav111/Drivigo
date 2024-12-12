// Show Navbar on Scrollup
// keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.navbar').classList.add('show');
  } else {
    // user has scrolled down
    document.querySelector('.navbar').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});

// Menu Button
const hamburger = document.getElementById("_hamburger");
const navContent = document.getElementById("_nav-content");

hamburger.addEventListener("click", () => {
    navContent.classList.toggle("show");
});

// About US
const card = document.querySelectorAll(".about-content");
window.addEventListener("scroll",animateCards);

function animateCards(){
    const checkingBottom = (window.innerHeight / 4) * (100/25);
    
    card.forEach((singleCard)=>{
        const cardTop = singleCard.getBoundingClientRect().top;
        
        let toSlideIn = cardTop < checkingBottom;

        if(toSlideIn){
            singleCard.classList.add("slideIn");
        }else{
            singleCard.classList.remove("slideIn");
        }
    });
}
