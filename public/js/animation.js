import { gsap, Power4 } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let show = 6;
let hide = -6;

////////// write on change //////////

export function animation_add(spliter, call = () => false) {
    gsap.fromTo(
        spliter.chars(),
        {
            opacity: 0,
            top: show,
        },
        {
            opacity: 1,
            top: 0,
            delay: 0.2,
            ease: Power4.easeOut,
            stagger: {
                each: 0.02,
            },
            onComplete: () => {
                call();
            },
        }
    );
}

////////// clear on change //////////

export function animation_clear(spliter, call = () => false) {
    gsap.fromTo(
        spliter.chars(),
        { opacity: 1, top: 0 },
        {
            opacity: 0,
            top: hide,
            ease: Power4.easeOut,
            stagger: {
                each: 0.02,
            },
            onComplete: () => {
                call();
            },
        }
    );
}

////////// show on change //////////

export function animation_show(target, animateto) {
    gsap.fromTo(
        target,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            ease: Power4.easeInOut,
            ...animateto,
        }
    );
}

////////// hide on change //////////

export function animation_hide(target, animateto) {
    gsap.fromTo(
        target,
        { opacity: 1 },
        {
            opacity: 0,
            duration: 1,
            ease: Power4.easeInOut,
            ...animateto,
        }
    );
}
