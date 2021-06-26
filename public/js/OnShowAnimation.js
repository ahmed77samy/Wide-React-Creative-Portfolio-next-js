import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let show = 6;
// let hide = -6;

////////////////////////////// animation in start //////////////////////////////

////////// write on show //////////

export function onShowAnimation_Writer(trigger, spliter) {
    gsap.from(spliter.chars(), {
        opacity: 0,
        top: show,
        pointerEvents: "inherit",
        ease: Power4.easeOut,
        scrollTrigger: {
            trigger: trigger,
            start: "top +=90%",
        },
        stagger: {
            each: 0.02,
        },
    });
}

////////// show on show //////////

export function onShowAnimation_showText(target) {
    gsap.fromTo(
        target,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            ease: Power4.easeInOut,
            scrollTrigger: {
                trigger: target,
                start: "top +=90%",
            },
        }
    );
}

////////// hide on show //////////

export function onShowAnimation_hide(target, background = "var(--red)") {
    ////////// add element hover //////////
    let div = document.createElement("div");
    target.appendChild(div);

    ////////// style //////////
    target.style.position = "relative";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.right = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.background = background;

    ////////// animation //////////
    gsap.to(div, {
        width: 0,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: target,
            start: "top +=90%",
        },
    });
}

////////// image on show //////////

export function onShowAnimation_image(target, background = "var(--black)") {
    ////////// add element hover //////////
    let div = document.createElement("div");
    let eleNodes = [...target.childNodes];
    let eleImage = eleNodes.filter((e) => {
        return e.classList.value.includes("animate__img");
    });

    target.appendChild(div);
    ////////// style //////////
    target.style.position = "relative";
    eleImage[0].style.transform = "scale(0.8)";
    eleImage[0].style.transformOrigin = "left";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.right = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.background = background;

    ////////// animation //////////
    gsap.to(div, {
        width: "0%",
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: target,
            start: "top +=90%",
        },
    });
    gsap.to(eleImage[0], {
        scale: 1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: target,
            start: "top +=90%",
        },
    });
}

////////////////////////////// animation in start //////////////////////////////
