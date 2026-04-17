// Smooth section animations on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll("section");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Add shimmer animation when hovering over your name
const logo = document.querySelector(".logo");
logo.addEventListener("mouseover", () => {
  logo.style.textShadow = "0 0 20px #00bcd4, 0 0 50px #00bcd4";
});
logo.addEventListener("mouseout", () => {
  logo.style.textShadow = "none";
});
