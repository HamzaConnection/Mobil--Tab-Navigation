const icons = document.querySelectorAll('nav ul li')
const contents = document.querySelectorAll('.content')


icons.forEach((item, idx) => {
    item.addEventListener('click', () => {

        removeActiveIcons()
        hideAllContent()

        item.classList.add('active')
        contents[idx].classList.add('show')


    })
});


function hideAllContent() {
    contents.forEach(e => {
        e.classList.remove('show')
    })
}


function removeActiveIcons() {
    icons.forEach(e => {
        e.classList.remove('active')
    })
}