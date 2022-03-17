const hamNav = document.getElementsByClassName('ham-menu')[0]
const respNav = document.getElementsByClassName('links')[0]
const dropNav = document.getElementsByName('Programs')[0]
const dropRespNav = document.getElementsByClassName('nav-bar_drop_nav')[0]
const marginPic = document.getElementsByClassName('header_pic')[0]
const showReturn = document.getElementsByClassName('return')[0]

hamNav.addEventListener('click', ()=>{
    respNav.classList.toggle('active')
    marginPic.classList.toggle('active_resp')  
})
dropNav.addEventListener('click', ()=>{
    dropRespNav.classList.toggle('active')
    marginPic.classList.toggle('active')
    respNav.classList.toggle('deactive')
    marginPic.classList.toggle('deactive')
    showReturn.classList.toggle('active')
    hamNav.classList.toggle('deactive')
})
showReturn.addEventListener('click', ()=>{
    dropRespNav.classList.toggle('active')
    marginPic.classList.toggle('active')
    respNav.classList.toggle('deactive')
    marginPic.classList.toggle('deactive')
    showReturn.classList.toggle('active')
    hamNav.classList.toggle('deactive')
})