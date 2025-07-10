// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;
var tl2;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Background Timeline
  tl2 = new TimelineMax({});

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });
  setRollover();
  animate();
}

function animate() {
  tl1.set(["#main"], { autoAlpha: 1, force3D: true });
  // tl1.set(["#cta"], { force3D: false, rotation: 0.001 });

  tl1.to("#gradient", 5, {
  scale: 0.8, // slight zoom in
  repeat: -1, // infinite loop
  yoyo: true, // zoom out after zoom in
  ease: Power1.easeInOut,
  transformOrigin: "center right" // ensures zoom from center
});

  tl1.staggerTo(['.chart'], 0.5,{ scale: 1, autoAlpha:1, left: "0px", ease: "back.out(1.5)" }, 1, 0);

}

function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

// function default_over(event) {
//   TweenMax.to(["#cta"], 0.3, { transform: "translate3d(0, 0, 1px) scale(1.1)", ease: Power1.easeOut, delay: 0 });
// }

// function default_out(event) {
//   TweenMax.to(["#cta"], 0.3, { transform: "translate3d(0, 0, 1px) scale(1)", ease: Power1.easeOut, delay: 0 });
// }

function default_over() {
  TweenMax.to('#cta', 0.3, { scale: 1.1, transformOrigin: '10% 70%', ease: Power2.easeOutIn })
}

function default_out() {
  TweenMax.to('#cta', 0.3, { scale: 1, ease: Power1.easeInOut })
}