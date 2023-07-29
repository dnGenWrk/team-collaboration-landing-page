import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(function () {
  const whatSect = document.querySelector(".footer-anim-trigger");

  gsap.from(whatSect, {
    opacity: 0,
    y: 300,
    scrollTrigger: whatSect,
    duration: 1.6,
    delay: 0.6,
    ease: "power3.out",
  });
})();
