import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
(function () {
  const elem = document.querySelector(".partners-animate");
  gsap.from(".prtnr-1-anim", {
    opacity: 0,
    y: 300,
    scrollTrigger: elem,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
  });
})();
