import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(function () {
  const whatSect = document.querySelector(".set-up-anim-trigger");
  const animateSection = document.querySelector(".setup-anim_obj");

  gsap.from(animateSection, {
    opacity: 0,
    y: 300,
    scrollTrigger: whatSect,
    duration: 1.6,
    delay: 0.6,
    ease: "power3.out",
  });
})();
