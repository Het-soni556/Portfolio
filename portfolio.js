var tl = gsap.timeline()
tl.from("#nav",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.2,
})
tl.from("#content",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.5,
})
tl.from("#cont",{
    opacity:0,
    y:-20,
    duration:0.2,
    delay:0.2,
    stagger:0.1
})
tl.from("#",{
    opacity:0,
    y:-20,
    duration:0.2,
    delay:0.2,
    stagger:0.1
})

var main = document. querySelector (".main" )
var cursor = document. querySelector (".cursor")
var haDiv= document.querySelector("#nav")
var hbDiv= document.querySelector("#content")
var hcDiv= document.querySelector("#intrest")
var hdDiv= document.querySelector("#work")
var heDiv= document.querySelector(".contact")


main.addEventListener ("mousemove", function(dets){
gsap. to (cursor, {
x: dets.x,
y: dets.y,
duration: 1.5,
ease: "back.out"
})
})
haDiv.addEventListener ("mouseenter", function (){
    gsap. to (cursor, {
    scale: 3,
    opacity:0.5
    })
    })
haDiv. addEventListener("mouseleave", function (){
    gsap. to (cursor, {
    scale: 1,
    opacity:1,
    })
    })
main.addEventListener ("mousemove", function(dets){
gsap. to (cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1.5,
        ease: "back.out"
})
})
hbDiv.addEventListener ("mouseenter", function (){
    gsap. to (cursor, {
    scale: 3,
    opacity:0.5
    })
    })
hbDiv. addEventListener("mouseleave", function (){
    gsap. to (cursor, {
    scale: 1,
    opacity:1,
    })
    })
main.addEventListener ("mousemove", function(dets){
gsap. to (cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1.5,
        ease: "back.out"
})
})
hcDiv.addEventListener ("mouseenter", function (){
    gsap. to (cursor, {
    scale: 3,
    opacity:0.5
    })
    })
hcDiv. addEventListener("mouseleave", function (){
    gsap. to (cursor, {
    scale: 1,
    opacity:1,
    })
    })
main.addEventListener ("mousemove", function(dets){
gsap. to (cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1.5,
        ease: "back.out"
})
})
hdDiv.addEventListener ("mouseenter", function (){
    gsap. to (cursor, {
    scale: 3,
    opacity:0.5
    })
    })
hdDiv. addEventListener("mouseleave", function (){
    gsap. to (cursor, {
    scale: 1,
    opacity:1,
    })
    })
    main.addEventListener ("mousemove", function(dets){
gsap. to (cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1.5,
        ease: "back.out"
})
})
heDiv.addEventListener ("mouseenter", function (){
    gsap. to (cursor, {
    scale: 3,
    opacity:0.5
    })
    })
heDiv. addEventListener("mouseleave", function (){
    gsap. to (cursor, {
    scale: 1,
    opacity:1,
    })
    })





gsap.registerPlugin(ScrollTrigger);

gsap.to(".page1",{
    x:700,
    duration:3,
    ScrollTrigger:".page2"
})
gsap.to(".page2",{
    x:700,
    duration:3,
    ScrollTrigger:".page3"
})
gsap.to(".page4",{
    x:700,
    duration:3,
    ScrollTrigger:".page4"
})
gsap.to(".page5",{
    x:700,
    duration:3,
    ScrollTrigger:".page5"
})


