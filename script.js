const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "Maaf ya sayang belum bisa jadi support system yang baik buat kamu, but i'll try my best for u";
    gif.src = "sorry.gif";
    nextBtn.innerHTML = "reply";
    nextClicked = true;
  } else {
    window.location.href = "https://wa.me/6287777004924";
  }
});