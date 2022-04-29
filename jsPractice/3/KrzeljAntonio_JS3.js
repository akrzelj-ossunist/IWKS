const pageButon = document.getElementsByName('botun')[0]
const pageButton = document.getElementsByName('bottun')[0]

// Omogućiti da korisnik može upisivati brojeve dok ne upiše 0. 
// Za svaki broj se utvrđuje parnost i na kraju se ispisuje zbroj 
// svih parnih brojeva i ukupan broj neparnih brojeva. Za testiranje 
// parnosti broja koristiti funkciju. Za zbrajanje parnih brojeva i brojanje 
// neparnih koristiti closure. Ne koristiti nizove. Zadatak riješiti i 
// sa regularnim i sa arrow zapisom funkcija.

pageButon.addEventListener('click', ()=>{
    // function oddCounter(){
    //     let cnt = 0
    //     return function(){
    //         return cnt++
    //     }
    // }
    // function sumCounter(num){
    //     let sum = 0
    //     return function(){
    //         return sum+=num       
    //     }
    // }
    let oddCounter = () => {cnt = 0; return () => cnt++}
    let sumCounter = num => {sum = 0; return () => sum+=num}
    let evenSuma
    let oddCnt= oddCounter()
    let num = +prompt("(Unestie broj: ")
    while(num != 0){
        if(num % 2 != 0)
            oddCnt() 
        else
            evenSuma = sumCounter(num)
        num = +prompt("(Unestie broj: ")
    }
    console.log("Suma je ",evenSuma()," broj neparnih je: ",oddCnt())
})

// Definirati funkciju rezultat koja će ispisivati poruku o ostvarenom rezultatu iz ispita iz određenog kolegija. 
// Prva vrijednost koja se šalje funkciji je naziv kolegija, druga ostvareni broj bodova, a treća ukupan broj bodova. 
// Primjer poziva funkcije rezultat je rezultat("MUP/PWKS")(25)(35); , a primjer ispisa pozvane funkcije 
// "Iz kolegija MUP/PWKS ostvarili ste 71.43% " . Koristiti metodu toFixed objekta Number za zaokruživanje rezultata 
// na dva decimalna mjesta (broj.toFixed(2)). Zadatak riješiti i sa regularnim i sa arrow zapisom funkcija.

pageButton.addEventListener('click', ()=>{
    // function rezultat(name){
    //     return function (points){
    //         return function(points_allover){
    //             console.log("Iz kolegija",name,"ostvarili ste",(points/points_allover).toFixed(2),"%")
    //         }
            
    //     }
    // }
    let rezultat = (name) => (points) =>  (points_allover) => {console.log("Iz kolegija",name,"ostvarili ste",((points/points_allover)*100).toFixed(2),"%")}
rezultat("PWKS")(25)(35)
})