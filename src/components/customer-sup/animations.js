import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
(function () {
  const customerSupportItems = {
    animTrigger: document.querySelector(".customer-sup-animate-trigger"),
    animObj1: document.querySelector(".cstm-anim-1"),
    animObj2: document.querySelector(".cstm-anim-2"),
    animObj3: document.querySelector(".cstm-anim-3"),
    animObj4: document.querySelector(".cstm-anim-4"),
    animObj5: document.querySelector(".cstm-anim-5"),
    animObj6: document.querySelector(".cstm-anim-6"),
  };

  const whatSect = document.querySelector(".customer-sup-animate-trigger2");
  const animateSection = document.querySelectorAll(".customer-sup-animate");

  gsap.from(animateSection, {
    opacity: 0,
    x: -600,
    scrollTrigger: whatSect,
    duration: 0.8,
    delay: 0.6,
    ease: "power3.out",
    stagger: 0.4,
  });

  gsap.from(customerSupportItems.animObj3, {
    opacity: 0,
    x: -600,
    scrollTrigger: customerSupportItems.animTrigger,
    duration: 0.8,
    delay: 0.6,
    ease: "power3.out",
    stagger: 0.4,
  });
  gsap.from(customerSupportItems.animObj1, {
    opacity: 0,
    width: 0,
    height: 0,
    scrollTrigger: customerSupportItems.animTrigger,
    duration: 2,
    delay: 1.2,
    ease: "power3.out",
  });
  gsap.from(customerSupportItems.animObj2, {
    opacity: 0,
    width: 0,
    height: 0,
    scrollTrigger: customerSupportItems.animTrigger,
    duration: 2,
    delay: 1.2,
    ease: "power3.out",
  });
  gsap.from(customerSupportItems.animObj4, {
    opacity: 0,
    y: 300,
    scrollTrigger: customerSupportItems.animTrigger,
    duration: 0.5,
    delay: 2.2,
    ease: "power3.out",
  });
  gsap.from(customerSupportItems.animObj5, {
    opacity: 0,
    x: -50,
    scrollTrigger: customerSupportItems.animTrigger,
    duration: 2.5,
    delay: 2.7,
    ease: "power3.out",
  });

  gsap.from(customerSupportItems.animObj6, {
    opacity: 0,
    y: 50,
    scrollTrigger: customerSupportItems.animTrigger,
    duration: 2.5,
    delay: 2.7,
    ease: "power3.out",
  });
})();
