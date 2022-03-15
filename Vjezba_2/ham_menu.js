const hamNav = document.getElementsByClassName('ham-menu')[0]
const respNav = document.getElementsByClassName('links')[0]

hamNav.addEventListener('click', ()=>{
    respNav.classList.toggle('active')
})
