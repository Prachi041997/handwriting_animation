gsap.from('.parts', {
    stagger: .3,
    duration: 1,
    delay: 1.5,
    x: 30,
    ease: 'expo.inOut',
    opacity: 0
})
gsap.to('.parts', {
    stagger: .1,
    duration: 1,
    delay: 5.5,
    y: '-100%',
    ease: 'expo.inOut',
    opacity: 0
})
gsap.to('#svgs', {
    duration: 1.5,
    delay: 4.5,
    y: '-10%',
    ease: 'expo.inOut',
    opacity: 0
})