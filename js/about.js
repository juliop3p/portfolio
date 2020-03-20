// Slide animation
const animationElements = document.querySelectorAll('[data-animation]')

const animationScroll = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    animationElements.forEach(elem => {
        if(windowTop > elem.offsetTop) {
            elem.classList.add('animate')
        } else {
            elem.classList.remove('animate')
        }
    })
}

animationScroll()

if(animationElements) {
    window.addEventListener('scroll', () => {
        animationScroll()
    })
}

// Slide animation

const target = document.querySelector('.motivacional-phrase')


window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5)

    if(windowTop > target.offsetTop) {
        target.style.opacity = '1'
    } else {
        target.style.opacity = '0'
    }
})


// end Slide animation