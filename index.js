const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

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
            left: dets.x-50,
            top: dets.y-40
        })
    })
}

videoAnimation()


function loadingAnimation() {
    gsap.from(".main__pageOne h1", {
        
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    })
    gsap.from(".main__videoContainer", {
        opacity: 0,
        scale:0.9,
        delay: 1.2,
        duration: 0.5,
        
    })
}

loadingAnimation()



