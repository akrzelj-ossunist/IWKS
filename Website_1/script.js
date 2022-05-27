const toggleButton = document.getElementsByClassName('responsive_nav')[0]
const navbarLinks = document.getElementsByClassName('div_nav')[0]
const headerMargin = document.getElementsByClassName('header')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
toggleButton.addEventListener('click', () => {
    headerMargin.classList.toggle('active')
})