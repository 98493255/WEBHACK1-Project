gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true }
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});

var tl = gsap.timeline()

tl.from("#nav, #navpart-2 h1, #navpart-3", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            scroller: "#main"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power3.out"
    });
});

gsap.utils.toArray('.timeline-img, .timeline-content').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            scroller: "#main"
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out"
    });
});
