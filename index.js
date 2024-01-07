// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotiveAnimation();

function navBarAimation() {
    gsap.to(".nav .nav__links .link", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: ".main__pageOne",
            scroller: "#main",
            start: "top -5%",
            end: "top -10%",
            scrub: true
        }
    })
}

navBarAimation();



function videoAnimation() {
    let videocon = document.querySelector(".main__videoContainer")
    let playCurser = document.querySelector(".main__curser")

    videocon.addEventListener("mouseenter", () => {
        gsap.to(playCurser, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener("mouseleave", () => {
        gsap.to(playCurser, {
            scale: 0,
            opacity: 0
        })
    })

    videocon.addEventListener("mousemove", (dets) => {
        gsap.to(playCurser, {
            left: dets.x - 50,
            top: dets.y - 40
        })
    })
}
videoAnimation()

function loadingAnimation() {
    gsap.from(".main__pageOne h1", {

        y: 100,
        opacity: 0,
        delay: 0.65,
        duration: 0.9,
        stagger: 0.4
    })
    gsap.from(".main__videoContainer", {
        opacity: 0,
        scale: 0.9,
        delay: 1.4,
        duration: 0.5,

    })
    gsap.from(".nav", {
        y: -10,
        opacity: 0,
        delay: 0.2,
        duration: 0.3
    })
}
loadingAnimation()

let pageTwoImages = document.querySelectorAll(".pageThree__elem");
let curser = document.querySelector("#curser");


document.addEventListener("mousemove", (dets) => {
    gsap.to(curser, {
        left: dets.x,
        top: dets.y
    })
})


pageTwoImages.forEach((curser__div) => {
    curser__div.addEventListener("mouseenter", () => {
        gsap.to('#curser', {
            transform: 'translate(-50%,-50%) scale(1)',
        });
    });

    curser__div.addEventListener("mouseleave", () => {
        gsap.to('#curser', {
            transform: 'translate(-50%,-50%) scale(0)',
        });
    });
    /* curser__div.addEventListener("mousemove", (dets) => {
         gsap.to(curser, {
             scale: 1,
             left: dets.x - 100,
             top: dets.y - 100
         })
     })*/
})

















