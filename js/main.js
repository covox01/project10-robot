

function frame1(){
   var tl = new TimelineMax()
   tl
      .from("#square", 1.7, {xPercent: -270, rotation: -90, ease: Elastic.easeInOut})

   TweenMax.delayedCall(1.5, frame2)
}

function frame2() {
   TweenMax.set("#square", {display: "none"})
   TweenMax.set(".corner-box, .torso-con, #upper-joint, #lower-joint, #chest", {display: "block"})
   var tl = new TimelineMax({delay: .1})
   tl
      .to(".upper, .lower", .5, {y: -50, ease: Back.easeInOut.config(1)})
      .to(".upper", .2, {y: -25, ease: Back.easeOut.config(2)}, "sync")
      .to(".lower", .2, {y: 0, ease: Back.easeOut.config(3)}, "sync")

   TweenMax.delayedCall(.8, frame3)
}

function frame3(){
   var tl = new TimelineMax()
   tl
      .to(".left-shoulder-con", .3, {x: -47, ease: Back.easeInOut.config(.9)}, "sync")
      .to(".right-shoulder-con", .3, {x: 52, ease: Back.easeInOut.config(.9)}, "sync")
      .to(".left-hip-con", .3, { x: -39, ease: Back.easeInOut.config(.9)}, "sync")
      .to(".right-hip-con", .3, { x: 52, ease: Back.easeInOut.config(.9)}, "sync")
   
   var morph = new TimelineMax()
   morph
      .to("#left-shoulder", .25, {morphSVG:{shape:"#left-shoulder-morph", type:"rotational"}, ease: Linear.easeNone}, "morph")
      .to("#right-shoulder", .25, { morphSVG: {shape:"#right-shoulder-morph", type:"rotational"}, ease: Linear.easeNone }, "morph")
      .to("#left-hip", .25, { morphSVG: {shape:"#left-hip-morph", type:"rotational"}, ease: Linear.easeNone }, "morph")
      .to("#right-hip", .25, { morphSVG: {shape:"#right-hip-morph", type:"rotational"}, ease: Linear.easeNone }, "morph")

   var color = new TimelineMax()
   color
      .to("#left-shoulder, #right-shoulder, #left-hip, #right-hip", .25, {fill: "#727272"})

   TweenMax.delayedCall(.5, frame4)
}

function frame4(){
   TweenMax.set("#shoulder-left-wing", {x: 90, y: 40, display: "block"})
   TweenMax.set("#shoulder-right-wing", { x: -90, y: 40, display: "block" })
   TweenMax.set("#hip-left-wing", { x: 87, y: 20, display: "block" })
   TweenMax.set("#hip-right-wing", { x: -87, y: 20, display: "block" })
   var tl = new TimelineMax()
   tl
      .to(".lower", .3, {y: -8, ease: Back.easeInOut.config(.5)})
      .to(".upper", .2, {y: -25, ease: Back.easeOut.config(2)}, "sync")
      .to(".lower", .2, {y: 0, ease: Back.easeOut.config(3)}, "sync")
      .to("#chest", .2, {y: -15, ease: Back.easeOut.config(2)}, "sync")
      .to("#torso", .2, {y: 0, ease: Back.easeOut.config(.5)}, "sync")
      .to("#shoulder-left-wing", .2, {x: 0, y:0, ease: Back.easeOut.config(.5)}, "sync")
      .to("#shoulder-right-wing", .2, { x: 0, y: 0, ease: Back.easeOut.config(.5) }, "sync")

      .to("#hip-left-wing", .2, { x: 0, y: 0, ease: Back.easeOut.config(.5)}, "sync")
      .to("#hip-right-wing", .2, { x: 0, y: 0, ease: Back.easeOut.config(.5) }, "sync")
   
   TweenMax.delayedCall(.5, frame5)
}

function frame5(){
   TweenMax.set("#left-leg", {transformOrigin: "top right", rotation: -105, display: "block"})
   TweenMax.set("#right-leg", { transformOrigin: "top left", rotation: 105, display: "block" })
   TweenMax.set("#head", {y: 70, display: "block"})
   TweenMax.set(".head-con", { display: "block" })
   var tl = new TimelineMax()
   tl
      .to("#left-leg", .3, {rotation: 0, ease: Back.easeInOut.config(1)}, "sync")
      .to("#right-leg", .3,   { rotation: 0, ease: Back.easeInOut.config(1) }, "sync")
      .to("#upper-joint", .3, {y: -36, ease: Back.easeInOut.config(.5)}, "sync")
      .to("#chest, #torso", .3, { y: -20, ease: Back.easeInOut.config(.5) }, "sync")
      .to("#head", .3, { y: 0, ease: Back.easeOut.config(1) }, "sync")

   TweenMax.delayedCall(.4, frame6)
}

function frame6(){
   TweenMax.set(".left-arm-con, .right-arm-con", { display: "block" })
   TweenMax.set("#left-arm, #right-arm", { drawSVG: "0 0" })
   var tl = new TimelineMax()
   tl
      .to("#left-arm", .5, {drawSVG: "0 100%", ease: Power3.easeInOut}, "sync")
      .to("#right-arm", .5, { drawSVG: "0 100%", ease: Power3.easeInOut }, "-=.4")
      // .to("#head", .2, { y: 5, yoyo: true, ease: Power3.easeInOut, repeat: 1 }, "sync")
}

function init(){
   TweenMax.set(".container", {xPercent: -50, yPercent: -50})
   TweenMax.set("#square", {xPercent: -50, yPercent: -50})
   TweenMax.set("#torso", {y: -150})
   TweenMax.set(".corner-box, #chest, .torso-con, #head, #upper-joint, #lower-joint, #shoulder-left-wing, #shoulder-right-wing, #hip-left-wing, #hip-right-wing", {display: "none"})

   TweenMax.set("#ref", {opacity: .0})
   frame1()
}

init()