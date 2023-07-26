import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(function () {
  const whatSect = document.querySelector(".our-feat-animate-trigger");
  const animateSection = document.querySelectorAll(".our-feat-anim_obj");

  gsap.from(animateSection, {
    opacity: 0,
    x: -600,
    scrollTrigger: whatSect,
    duration: 0.8,
    delay: 0.6,
    ease: "power3.out",
    stagger: 0.4,
  });
})();
