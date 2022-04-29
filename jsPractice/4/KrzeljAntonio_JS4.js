const Zadatak_1 = document.getElementsByName('zad1')[0]
const Zadatak_2 = document.getElementsByName('zad2')[0]
const Zadatak_3 = document.getElementsByName('zad3')[0]

Zadatak_1.addEventListener('click', ()=>{
    // Korištenjem ugnježđenog setTimeout, nakon početne 2s odgode potrebno je svake sekunde 
    // ispisati stotice od 500 do 1000, a nakon toga svake 2 sekunde ispisati do 1500.
    function printNum(){
        var i = 500
        setTimeout(function ispis(){
            console.log(i)
            if(i < 1000){
                setTimeout(ispis,1000)
            }
            if(i >= 1000 && i < 1500){
                setTimeout(ispis,2000)
            }
            i+=100
        },2000)
    }
    printNum()
})

Zadatak_2.addEventListener('click', ()=>{
    // Korištenjem currying i arrow zapisa, omogućiti pozivanje funkcije sa promjenjivim brojem argumenata 
    // u formatu (a)(b)(c).... koja bi trebala vratiti umnožak pozitivnih brojeva manjih od 20. 
    // Glavna currying funkcija prima jedan argument funkciju za množenje (a, b) => a * b.

    function curry(fja){
        let rez = 1
        return function suma(x){
            console.log(x)
            if(x == undefined)
                return rez
            else if(x < 20 && x%2 == 0)
                rez = fja(rez,x)
            return suma
        }
    }
    // let multiplyEven = curry(function(a,b){
    //     console.log(a,b)
    //     return a*b
    // })

    let multiplyEven = curry((a,b) => a * b)

    console.log(multiplyEven (10)(20)(30)())
})

Zadatak_3.addEventListener('click', ()=>{
    // Kreirati niz sa 10 slučajno generiranih brojeva u intervalu od 50 do 150 koje je potrebno zaokružiti. 
    // Ispisati min i max vrijednosti tog niza i njihove pripadne indekse. 
    // Mogu se koristiti petlje, metode push, indexOf, findIndex, Math (random, min, max, round,...).  
    function getRandomNum() {
        return Math.random() * (150-50) + 50
      }
    function getArray(...arg){
        return arg
    }
    arr = getArray(Math.round(getRandomNum()),Math.round(getRandomNum()),Math.round(getRandomNum()),Math.round(getRandomNum()),Math.round(getRandomNum()),Math.round(getRandomNum()),Math.round(getRandomNum()),Math.round(getRandomNum()),Math.round(getRandomNum()),Math.round(getRandomNum()))
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let indexMin = arr.indexOf(min)
    let indexMax = arr.indexOf(max)
    console.log(...arr)
    console.log(indexMin,'->',min)
    console.log(indexMax,'->',max)

    
})