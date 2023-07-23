import gsap from "gsap";
(function () {
  const animObj1 = document.querySelectorAll(".aim-obj1");
  const animObj2 = document.querySelectorAll(".aim-obj2");
  const animObj3 = document.querySelectorAll(".aim-obj3");
  const animObj4 = document.querySelectorAll(".aim-obj4");
  const animObj5 = document.querySelectorAll(".aim-obj5");
  const t1 = gsap.timeline();
  t1.from(animObj1, { backgroundSize: 0, duration: 0.8 });
  t1.from(animObj2, { opacity: 0, x: -300, duration: 0.4 });
  t1.from(animObj3, { opacity: 0, y: -300, duration: 0.6 }, +0.5);
  t1.from(animObj4, { opacity: 0, x: -300, duration: 0.6 }, +1.5);
  t1.from(animObj5, { opacity: 0, y: 300, duration: 0.3 });
})();
