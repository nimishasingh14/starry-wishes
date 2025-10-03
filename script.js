const stars = document.querySelectorAll(".star");
const sky = document.querySelector(".sky");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

stars.forEach(star => {
  star.addEventListener("click", () => {
    const message = star.getAttribute("data-message");
    const imgSrc = star.getAttribute("data-img");

    popupMessage.textContent = message;
    popupImg.src = imgSrc;
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});

function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  shootingStar.style.top = Math.random() * 40 + "vh"; 
  shootingStar.style.left = Math.random() * 100 + "vw";
  sky.appendChild(shootingStar);

  setTimeout(() => shootingStar.remove(), 1500);
}
setInterval(createShootingStar, 3000);

function shuffleStars() {
  const boxTop = 30;   
  const boxLeft = 20;
  const boxHeight = 60;
  const boxWidth = 70; 

  stars.forEach(star => {
    const top = boxTop + Math.random() * boxHeight;
    const left = boxLeft + Math.random() * boxWidth;
    star.style.top = top + "%";
    star.style.left = left + "%";
  });
}
setInterval(shuffleStars, 8000);

function cycleFloatingStars() {
  stars.forEach(star => star.classList.add("floating"));

  setTimeout(() => {
    stars.forEach(star => star.classList.remove("floating"));
  }, 3000);
}
setInterval(cycleFloatingStars, 10000);

stars.forEach(star => {
  star.addEventListener("click", () => {
    star.classList.add("burst");
    setTimeout(() => star.classList.remove("burst"), 600);
  });
});

function createStardust() {
  const dust = document.createElement("div");
  dust.classList.add("stardust");
  dust.style.left = Math.random() * 100 + "vw";
  dust.style.top = "-5px";
  dust.style.animationDuration = (4 + Math.random() * 3) + "s";

  sky.appendChild(dust);

  setTimeout(() => dust.remove(), 7000);
}
setInterval(createStardust, 500);

function addOrbitingStar(mainStar) {
  const orbit = document.createElement("div");
  orbit.classList.add("orbit");
  mainStar.appendChild(orbit);
}
addOrbitingStar(stars[5]);

function meteorShower() {
  for (let i = 0; i < 5; i++) {
    setTimeout(createShootingStar, i * 300); 
  }
}
setInterval(meteorShower, 15000);

stars[6].classList.add("special", "spiral");
