import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(function () {
  const whatSect = document.querySelector(".what-can-do-animate-trigger");
  const animateSection = document.querySelector(".what-can-do-animate");

  gsap.from(animateSection, {
    opacity: 0,
    y: 300,
    scrollTrigger: whatSect,
    duration: 0.8,
    delay: 0.6,
    ease: "power3.out",
    stagger: 0.2,
  });
})();
