// Writer Machine Effect
const writerMachine = phrase => {
    const lettersArray = phrase.split('')

    const textAnimantion = document.querySelector('#text-animation')
    textAnimantion.innerHTML = ''
    
    lettersArray.forEach((elem, index) => {
        setTimeout(() => textAnimantion.innerHTML += elem, 75 * index)
    })
}

let turn = 0

const phrases = ['Portfólio Julio Cesar', 'Veja meus principais projetos...', 'Veja o que estou estudando...', 'e muito mais!']
writerMachine(phrases[0])

setInterval(() => {
    turn++
    turn = turn === 4 ? 0 : turn
    writerMachine(phrases[turn])
}, 4000)

// end Writer Machine Effect


// Carousel
document.querySelectorAll('.p-skip').forEach(elem => {
    elem.onclick = () => {
        document.querySelectorAll('.p-skip').forEach(skip => {
            skip.style.background = 'var(--blue)'
        })
        elem.style.background = 'var(--purple)'
        document.querySelectorAll('.solo-projects').forEach(item => {
            item.style.display = 'none'
        })
        document.querySelector(`#p-project${elem.id}`).style.display = 'grid'
    }
})

document.querySelectorAll('.c-skip').forEach(elem => {
    elem.onclick = () => {
        document.querySelectorAll('.c-skip').forEach(skip => {
            skip.style.background = 'var(--blue)'
        })
        elem.style.background = 'var(--purple)'
        document.querySelectorAll('.course-projects').forEach(item => {
            item.style.display = 'none'
        })
        document.querySelector(`#d-project${elem.id}`).style.display = 'grid'
    }
})

// end Carousel

// Progress animation
const target = document.querySelectorAll('.progress')

window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5)

    target.forEach(elem => {
        if(windowTop > elem.offsetTop) {
            elem.classList.add('animation')
        } else {
            elem.classList.remove('animation')
        }

    })
})
