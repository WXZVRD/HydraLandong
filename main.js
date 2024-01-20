class Carousel{
    constructor(track, itemList) {
        this.track = track
        this.itemList = itemList
    }

    moveLeft() {
        const itemWidth = this.itemList[0].offsetWidth * 1.3;
        let newLeftOffset = parseFloat(this.track.style.left) - itemWidth || 0
        this.track.style.left = `${newLeftOffset}px`
    }

    moveRight() {
        const itemWidth = this.itemList[0].offsetWidth * 1.3;
        let newRightOffset = parseFloat(this.track.style.left) + itemWidth || 0
        this.track.style.left = `${newRightOffset}px`
    }
}

// MAIN SECTION CAROUSEL
const mainCarouselTrack = document.querySelector('.carousel__track')
const carouselItemList = document.querySelectorAll('.carousel__item')

const carouselPrevBtn = document.querySelector('.carousel__prev');
const carouselNextBtn = document.querySelector('.carousel__next');

const carousel = new Carousel(mainCarouselTrack, carouselItemList)

carouselPrevBtn.addEventListener('click', (e) => {
    carousel.moveRight()
})

carouselNextBtn.addEventListener('click', (e) => {
    carousel.moveLeft()
})

// GSAP ANIMATION
const tl = gsap.timeline()

tl.fromTo('.main__illustration', {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
}, {
    scale: 1, // Масштаб от 0 до 1
    opacity: 1, // Прозрачность от 0 до 1
    duration: 1, // Длительность анимации в секундах
    ease: "power2.out",
})

tl.fromTo('.main__ill-lines', {
    scale: 0, // Масштаб от 0 до 1
    opacity: 0, // Прозрачность от 0 до 1
    duration: 1, // Длительность анимации в секундах
    ease: "power2.out",
}, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
})
    .fromTo('.main__title', {x: -300, opacity: 0}, {x: 0, opacity: 1}, 0)
    .fromTo('.main__text', {x: -300, opacity: 0}, {x: 0, opacity: 1}, 0)
    .fromTo('.main__btn', {x: -300, opacity: 0}, {x: 0, opacity: 1}, 0)
    .fromTo('.header', {y: -100, opacity: 0}, {y: 0, opacity: 1}, 0)

// INTRODUCTION SECTION ANIM
gsap.from('.introduction .section__present-title, .introduction .section__mn', {
    scrollTrigger: {
        trigger: '.main__banner',
        start: 'center center'
    },
    x: -700,
   stagger: 0.3
})
gsap.from('.introduction .section__header-text, .introduction__content .content__title, .introduction__content .content__subtitle, .introduction__content .content__text', {
    x: 900,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.main__banner',
        start: 'center center'
    }
});
gsap.from('.introduction__img', {
    scrollTrigger: {
        trigger: '.main__banner',
        start: 'center center'
    },
    opacity: 0,
    scale: 0
})

// BUILD SECTION ANIM
gsap.from('.build .section__present-title, .build .section__mn', {
    scrollTrigger: {
        trigger: '.introduction .contained__btn',
        start: 'start center'
    },
    x: -700,
    stagger: 0.3
})
gsap.from('.build .section__header-text', {
    scrollTrigger: {
        trigger: '.introduction .contained__btn',
        start: 'start center'
    },
    x: 700,
    stagger: 0.3
})
gsap.from('.build__block .build__block-item', {
    scrollTrigger: {
        trigger: '.build .section__header-text',
        start: 'start center'
    },
    scale: 0,
    transformOrigin: 'top center',
    stagger: 0.3
})

// HOW SECTION ANIM
gsap.from('.how .section__present-title, .how .section__mn', {
    scrollTrigger: {
        trigger: '.build__block',
        start: 'center center'
    },
    x: -700,
    stagger: 0.3
})
gsap.from('.how .section__header-text', {
    scrollTrigger: {
        trigger: '.build__block',
        start: 'center center'
    },
    x: 700,
    stagger: 0.3
})
gsap.from('.how .block__item', {
    scrollTrigger: {
        trigger: '.how .section__header-text',
        start: 'start center'
    },
    scale: 0,
    transformOrigin: 'top center',
    stagger: 0.5,
})
gsap.from('.how .how__decor', {
    scrollTrigger: {
        trigger: '.how .section__header-text',
        start: 'start center'
    },
    width: 0,
    duration: 3
})






