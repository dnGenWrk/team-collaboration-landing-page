import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(function () {
  const whatSect = document.querySelector(".save-time-animate-trigger");
  const animateSection = document.querySelectorAll(".save-time-animate");

  gsap.from(animateSection, {
    opacity: 0,
    x: 600,
    scrollTrigger: whatSect,
    duration: 0.8,
    delay: 0.6,
    ease: "power3.out",
    stagger: 0.4,
  });
})();
