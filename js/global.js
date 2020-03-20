// Navbar Small Screen
document.querySelector('#navSmallScreen').onclick = () => {
    document.querySelector('.nav-small').classList.toggle('show')
}

const page = document.URL.split('/')[3].split('.')[0]

document.querySelectorAll('.list-item').forEach(elem => {

    if(page === elem.innerHTML.toLocaleLowerCase()) {
        elem.classList.add('active')
    }
})

// end Navbar Small Screen