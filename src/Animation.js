import { useEffect } from "react";
import gsap from "gsap";

export default function useAnimations() {
    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) {
            gsap.set(".white-block", { height: 0 });
            return undefined;
        }

        const defaults = { duration: 1, delay: 1 };
        const animations = [
            gsap.from("#home .dayShape, #home .nightShape", { ...defaults, bottom: "100%", ease: "expo.out" }),
            gsap.to(".white-block", { ...defaults, height: 0, ease: "expo.out" }),
            gsap.from("#header", { ...defaults, y: -100, opacity: 0, ease: "back.out(1.5)" }),
            gsap.from(".home-container1", { ...defaults, y: 100, opacity: 0, ease: "back.out(1.5)" })
        ];

        return () => animations.forEach(animation => animation.kill());
    }, []);
}
