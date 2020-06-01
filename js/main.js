

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

   TweenMax.delayedCall(1, frame3)
}

function frame3(){
   var tl = new TimelineMax()
   tl
      .to(".left-shoulder-con", .3, {x: -47, ease: Back.easeInOut.config(.9)}, "sync")
      .to(".right-shoulder-con", .3, {x: 52, ease: Back.easeInOut.config(.9)}, "sync")
      .to(".left-hip-con", .3, { x: -43, ease: Back.easeInOut.config(.9)}, "sync")
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
   var tl = new TimelineMax()
   tl
      .to(".lower", .5, {y: -8, ease: Back.easeInOut.config(1)})
      .to(".upper", .2, {y: -25, ease: Back.easeOut.config(2)}, "sync")
      .to(".lower", .2, {y: 0, ease: Back.easeOut.config(3)}, "sync")
      .to("#chest", .2, {y: -15, ease: Back.easeOut.config(2)}, "sync")
      .to("#torso", .2, {y: 0, ease: Back.easeOut.config(.5)}, "sync")
      .to("#shoulder-left-wing", .2, {x: 0, y:0, ease: Back.easeOut.config(.5)}, "sync")
      .to("#shoulder-right-wing", .2, { x: 0, y: 0, ease: Back.easeOut.config(.5) }, "sync")
}

function init(){
   TweenMax.set(".container", {xPercent: -50, yPercent: -50})
   TweenMax.set("#square", {xPercent: -50, yPercent: -50})
   TweenMax.set("#torso", {y: -150})
   TweenMax.set(".corner-box, #chest, .torso-con, #head, #upper-joint, #lower-joint, #shoulder-left-wing, #shoulder-right-wing", {display: "none"})

   TweenMax.set("#ref", {opacity: .0})
   frame1()
}

init()