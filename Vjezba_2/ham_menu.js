const hamNav = document.getElementsByClassName('ham-menu')[0]
const respNav = document.getElementsByClassName('links')[0]
const dropNav = document.getElementsByName('Programs')[0]
const dropRespNav = document.getElementsByClassName('nav-bar_drop_nav')[0]
const showReturn = document.getElementsByClassName('return')[0]
const dropNavJoin = document.getElementsByName('Join')[0]
const JoinNav = document.getElementsByClassName('join_nav')[0]
const homePlacemant = document.getElementsByName('home')[0]
const infoPlacemant = document.getElementsByName('info')[0]
const newMemberPlace = document.getElementsByName('member')[0]

var JoinClicked = 0;
var ProgClicked = 0;

hamNav.addEventListener('click', ()=>{
    respNav.classList.toggle('active')
})

homePlacemant.addEventListener('click', ()=>{
    respNav.classList.toggle('active')
})

infoPlacemant.addEventListener('click', ()=>{
    respNav.classList.toggle('active')
})

newMemberPlace.addEventListener('click', ()=>{
    respNav.classList.toggle('active')
    JoinNav.classList.toggle('active')
    respNav.classList.toggle('deactive')
    showReturn.classList.toggle('active')
    hamNav.classList.toggle('deactive')
    JoinClicked = 0
})

dropNav.addEventListener('click', ()=>{
    dropRespNav.classList.toggle('active')
    respNav.classList.toggle('deactive')
    showReturn.classList.toggle('active')
    hamNav.classList.toggle('deactive')
    if(JoinClicked == 1){
        JoinNav.classList.toggle('active')
        respNav.classList.toggle('deactive')
        showReturn.classList.toggle('active')
        hamNav.classList.toggle('deactive')
        JoinClicked = 0
    }
    if(ProgClicked == 0)
    ProgClicked = 1
    else
    ProgClicked = 0
    console.log("Program: ",ProgClicked)
    console.log("Join: ",JoinClicked)
})
showReturn.addEventListener('click', ()=>{
    if(ProgClicked == 1){
        dropRespNav.classList.toggle('active')
        respNav.classList.toggle('deactive')
        showReturn.classList.toggle('active')
        hamNav.classList.toggle('deactive')
        ProgClicked = 0
    }
    if(JoinClicked == 1){
        JoinNav.classList.toggle('active')
        respNav.classList.toggle('deactive')
        showReturn.classList.toggle('active')
        hamNav.classList.toggle('deactive')
        JoinClicked = 0
    }
})
dropNavJoin.addEventListener('click', ()=>{
    JoinNav.classList.toggle('active')
    respNav.classList.toggle('deactive')
    showReturn.classList.toggle('active')
    hamNav.classList.toggle('deactive')
    if(ProgClicked == 1){
        dropRespNav.classList.toggle('active')
        respNav.classList.toggle('deactive')
        showReturn.classList.toggle('active')
        hamNav.classList.toggle('deactive')
        ProgClicked = 0
    }
    if(JoinClicked == 0)
    JoinClicked = 1
    else
    JoinClicked = 0
    console.log("Program: ",ProgClicked)
    console.log("Join: ",JoinClicked)
})