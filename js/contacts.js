// Circles animation 
const ulCircles = document.querySelector('ul.circles')

for(let i=0; i<11; i++) {
    const li = document.createElement('li')

    const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

    const size = random(10, 99)
    const position = random(1, 99)
    const delay = random(5, 0.1)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`
    li.style.left = `${position}%`
    li.style.animationDelay = `${delay}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`
    ulCircles.appendChild(li)
}

// end Circles animation