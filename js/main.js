

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
   TweenMax.set("#head", {display: "block"})
   var tl = new TimelineMax()
   tl
      .to(".left-shoulder-con", .3, {x: -47, ease: Back.easeInOut.config(.9)}, "sync")
      .to(".right-shoulder-con", .3, {x: 52, ease: Back.easeInOut.config(.9)}, "sync")
      .to(".left-hip-con", .3, { x: -39, ease: Back.easeInOut.config(.9)}, "sync")
      .to(".right-hip-con", .3, { x: 52, ease: Back.easeInOut.config(.9)}, "sync")
      .to("#head", .3, {y: 50, ease: Back.easeInOut}, "sync")
   
   var morph = new TimelineMax()
   morph
      .to("#left-shoulder", .25, {morphSVG:{shape:"#left-shoulder-morph", type:"rotational"}, ease: Linear.easeNone}, "morph")
      .to("#right-shoulder", .25, { morphSVG: {shape:"#right-shoulder-morph", type:"rotational"}, ease: Linear.easeNone }, "morph")
      .to("#left-hip", .25, { morphSVG: {shape:"#left-hip-morph", type:"rotational"}, ease: Linear.easeNone }, "morph")
      .to("#right-hip", .25, { morphSVG: {shape:"#right-hip-morph", type:"rotational"}, ease: Linear.easeNone }, "morph")

   var color = new TimelineMax()
   color
      .to("#left-shoulder, #right-shoulder, #left-hip, #right-hip", .25, {fill: "#727272"})

   TweenMax.delayedCall(.4, frame4)
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
      .to("#shoulder-left-wing", .2, {x: 0, y: 0, ease: Back.easeOut.config(.5)}, "sync")
      .to("#shoulder-right-wing", .2, { x: 0, y:  0, ease: Back.easeOut.config(.5) }, "sync")

      .to("#hip-left-wing", .2, { x: 0, y: 0, ease: Back.easeOut.config(.5)}, "sync")
      .to("#hip-right-wing", .2, { x: 0, y: 0, ease: Back.easeOut.config(.5) }, "sync")
   
   TweenMax.delayedCall(.5, frame5)
   
}

function frame5(){
   TweenMax.set("#left-leg", {transformOrigin: "top right", rotation: -105, display: "block"})
   TweenMax.set("#right-leg", { transformOrigin: "top left", rotation: 105, display: "block" })
   TweenMax.set("#head", { display: "block"})
   TweenMax.set(".head-con", { display: "block" })
   var tl = new TimelineMax()
   tl
      .to("#left-leg", .3, {rotation: 0, ease: Back.easeInOut.config(1)}, "sync")
      .to("#right-leg", .3,   { rotation: 0, ease: Back.easeInOut.config(1) }, "sync")
      .to("#upper-joint", .3, {y: -36, ease: Back.easeInOut.config(.5)}, "sync")
      .to("#chest, #torso", .3, { y: -20, ease: Back.easeInOut.config(.5) }, "sync")
      .to("#head", .3, { y: -5, ease: Back.easeOut.config(.5) }, "sync")
      .to(".left-shoulder-con, .right-shoulder-con", .3, { y: -40, ease: Back.easeOut}, "sync")
      .to(".left-shoulder-con, .right-shoulder-con", .3, { y: -30, ease: Back.easeOut.config(4)}, "sync2")
      .to("#head", .3, { y: 0, ease: Back.easeOut.config(4)}, "sync2")

   // TweenMax.delayedCall(0, frame6)
   TweenMax.delayedCall(0.2, frame6)
}

function frame6(){
   TweenMax.set(".left-arm-con, .right-arm-con", {y: -20, display: "block"})
   TweenMax.set("#left-arm, #right-arm", { drawSVG: "0 0" })
   var tl = new TimelineMax()
   tl
      .to(".left-arm-con", .4, {y: 0, ease: Back.easeInOut.config(4)}, "sync")
      .to("#left-arm", .4, {drawSVG: "0 100%", ease: Power3.easeInOut}, "sync")
      
      .to(".right-arm-con", .4, {y: 0, ease: Back.easeInOut.config(4)}, "sync2-=.35")
      .to("#right-arm", .4, { drawSVG: "0 100%", ease: Power3.easeInOut }, "sync2-=.35")

      .to("#left-arm", .3, {drawSVG: "0 90%", ease: Back.easeOut}, "sync3")
      .to("#right-arm", .3, { drawSVG: "0 80%", ease: Back.easeOut }, "sync3")

   TweenMax.delayedCall(1, reverse)
}

function reverse(){
   var tl = new TimelineMax()
   tl
      .to("#head", .3, { y: 15, ease: Back.easeOut.config(1) }, "sync")
      .to(".left-shoulder-con, .right-shoulder-con", .3, {y: -20, ease: Back.easeOut}, "sync")

      .to("#head", .3, { y: 5, ease: Back.easeOut.config(1) }, "sync2")
      .to(".left-shoulder-con, .right-shoulder-con", .3, {y: -30, ease: Back.easeOut.config(4)}, "sync2")

   var arms = new TimelineMax()
   arms
      .to("#left-arm, #right-arm", .4, { drawSVG: "0 0", ease: Power3.easeIn })
      .to(".left-arm-con, .right-arm-con", .4, {y: 20, ease: Back.easeInOut.config(4)}, "-=.2")

   var wings = new TimelineMax({delay: .3})
   wings
      .to("#shoulder-left-wing", .4, { x: 90, y: 40, ease: Back.easeOut.config(1)}, "sync")
      .to("#shoulder-right-wing", .4, { x: -90, y: 40, ease: Back.easeOut.config(1)}, "sync")
      .to("#hip-left-wing", .4, { x: 87, y: 20, ease: Back.easeOut.config(1)}, "sync")
      .to("#hip-right-wing", .4, { x: -87, y: 20, ease: Back.easeOut.config(1) }, "sync")

   var head = new TimelineMax({delay: .4})
   head
      .to("#left-leg", .4, {rotation: -98, ease: Back.easeInOut.config(1)}, "sync")
      .to("#right-leg", .4, { rotation: 98, ease: Back.easeInOut.config(1) }, "sync")
      .to("#head", .4, {y: 115, ease: Back.easeInOut.config(1)}, "sync")
      .to("#torso", .4, {y: -50, ease: Back.easeInOut.config(1)}, "sync")

   var morph = new TimelineMax({delay: .5})
   morph
      .to("#left-shoulder", .4, {morphSVG: "#left-shoulder", fill: "#fff", ease: Back.easeInOut.config(1)},"morph")
      .to("#right-shoulder", .4, { morphSVG: "#right-shoulder", fill: "#fff", ease: Back.easeInOut.config(1) },"morph")
      .to("#left-hip", .4, { morphSVG: "#left-hip", fill: "#fff", ease: Back.easeInOut.config(1) },"morph")
      .to("#right-hip", .4, { morphSVG: "#right-hip", fill: "#fff", ease: Back.easeInOut.config(1) },"morph")

      .to(".left-shoulder-con", .4, {x: 0, ease: Back.easeInOut.config(1)},"morph")
      .to(".right-shoulder-con", .4, {x: 0,  ease: Back.easeInOut.config(1) }, "morph")
      .to(".left-hip-con", .4, {x: 0,  ease: Back.easeInOut.config(1) }, "morph")
      .to(".right-hip-con", .4, {x: 0,  ease: Back.easeInOut.config(1) }, "morph")

   
      .to(".upper, .lower", .4, {y: 0, ease: Back.easeInOut.config(1)}, "morph2-=.3")

   TweenMax.delayedCall(1.1, rollOut)
}  

function rollOut(){
   TweenMax.set(".corner-box, #chest, .torso-con, #upper-joint, #lower-joint, #shoulder-left-wing, #shoulder-right-wing, #hip-left-wing, #hip-right-wing, #left-leg, #right-leg", { display: "none" })
   TweenMax.set("#square", {display: "block"} )
   var tl = new TimelineMax()
   tl
      .to("#square", 1, { xPercent: 200, rotation: 90, ease: Back.easeInOut})
}

function init(){
   TweenMax.set(".left-shoulder-con", {force3D: false, rotation: 0.01})
   TweenMax.set(".container", {xPercent: -50, yPercent: -50})
   TweenMax.set("#square", {xPercent: -50, yPercent: -50})
   TweenMax.set("#torso", {y: -150})
   TweenMax.set("#head", {y: 70})
   TweenMax.set(".corner-box, #chest, .torso-con, #upper-joint, #lower-joint, #shoulder-left-wing, #shoulder-right-wing, #hip-left-wing, #hip-right-wing", {display: "none"})

   TweenMax.set("#ref", {opacity: .0})
   frame1()
}

init()