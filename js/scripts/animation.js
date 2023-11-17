const fadeIn = document.querySelectorAll(".fade-in");
const fadeUp = document.querySelectorAll(".fade-up");
const fadeDown = document.querySelectorAll(".fade-down");
const fadeLeft = document.querySelectorAll(".fade-left");
const fadeRight = document.querySelectorAll(".fade-right");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -80px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

fadeIn.forEach((fader) => {
  appearOnScroll.observe(fader);
});

fadeUp.forEach((faderUp) => {
  appearOnScroll.observe(faderUp);
});

fadeDown.forEach((faderDown) => {
  appearOnScroll.observe(faderDown);
});

fadeLeft.forEach((faderLeft) => {
  appearOnScroll.observe(faderLeft);
});

fadeRight.forEach((faderRight) => {
  appearOnScroll.observe(faderRight);
});
