import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(function () {
  const whatSect = document.querySelector(".integrate-animate-trigger");
  const animateSection = document.querySelector(".integrate-animate-section");
  const cards = document.querySelectorAll(".integrate-card");

  gsap.from(animateSection, {
    opacity: 0,
    y: 300,
    scrollTrigger: whatSect,
    duration: 1.6,
    delay: 0.6,
    ease: "power3.out",
  });

  cards.forEach((elem) => {
    const animation = gsap.to(elem, {
      paused: true,
      duration: 0.6,
      x: 15,
      y: -15,
    });
    elem.addEventListener("mouseenter", () => animation.play());
    elem.addEventListener("focusin", () => animation.play());
    elem.addEventListener("mouseleave", () => animation.reverse());
    elem.addEventListener("focusout", () => animation.reverse());
  });
})();
