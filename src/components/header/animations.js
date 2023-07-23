import gsap from "gsap";
(function () {
  const headeritemsAnimate = {
    animObj1: document.querySelectorAll(".aim-obj1"),
    animObj2: document.querySelectorAll(".aim-obj2"),
    animObj3: document.querySelectorAll(".aim-obj3"),
    animObj4: document.querySelectorAll(".aim-obj4"),
    animObj5: document.querySelectorAll(".aim-obj5"),
    animObj6: document.querySelectorAll(".aim-obj6"),
    animObj7: document.querySelectorAll(".aim-obj7"),
    animObj8: document.querySelectorAll(".aim-obj8"),
  };
  /* 
  ! UNCOMMENT WHEN PUBLISH 
  const t1 = gsap.timeline();
  t1.from(headeritemsAnimate.animObj1, { backgroundSize: 0, duration: 0.8 });
  t1.from(headeritemsAnimate.animObj2, { opacity: 0, x: -300, duration: 0.4 });
  t1.from(headeritemsAnimate.animObj3, { opacity: 0, y: -300, duration: 0.6 }, +0.5);
  t1.from(headeritemsAnimate.animObj4, { opacity: 0, x: -300, duration: 0.6 }, +0.5);
  t1.from(headeritemsAnimate.animObj5, { opacity: 0, y: 300, duration: 0.3 });
  t1.from(headeritemsAnimate.animObj6, { opacity: 0, x: 300, duration: 0.4 }, +0.4);
  t1.from(headeritemsAnimate.animObj7, { opacity: 0, y: -300, duration: 0.5 }, +0.8);
  t1.from(headeritemsAnimate.animObj8, { opacity: 0, y: 300, duration: 0.5 }, +1.6);
  */
})();
