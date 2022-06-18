import AnimateByScroll, { AnimationElement } from "./modules/animateByScroll.js";
new AnimateByScroll({ repeatingAnimations: false }, new AnimationElement({
    selector: '.work-card_first-item',
    animateStartCoeff: 0.01,
    timeoutBeforeStart: 500,
}));
AnimateByScroll.activeAnimationClass = 'active';