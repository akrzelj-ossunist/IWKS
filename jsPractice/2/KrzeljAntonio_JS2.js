const buttonConsole = document.getElementsByName('botun')[0]

// Definirati funkciju koja može primiti promjenjivi broj parametara, a koja vraća zbroj vrijednosti prvog i zadnjeg poslanog argumenta.

// Potrebno je definirati niz sa 10tak pozitivnih i negativnih brojeva te funkciju koja prima četiri parametra. 
// Prvi parametar funkcije je niz brojeva, drugi funkcija sa jednim parametrom koja će ispitivati da li je broj pozitivan, 
// treći funkcija sa dva parametra koja će ispitivati da li je broj (prvi par) djeljiv sa drugim brojem (drugi param) i 
// četvrti parametar je broj za kojeg će se ispitivati djeljivost u funkciji iz trećeg parametra (fja(nizBrojeva, fjaPozit, fjaDjelji,brojDj);).


// Definirati funkciju koja prima tri parametra, gdje prvi predstavlja funkciju za unos broja od strane korisnika korištenjem prompta, 
// drugi parametar predstavlja broj koliko brojeva korisnik treba upisati, a treći parametar predstavlja funkciju za zbrajanje dvaju brojeva. 
// Glavna funkcija vraća zbroj svih upisanih brojeva kao povratnu vrijednost.

buttonConsole.addEventListener('click', ()=>{
    //1. Zadatak
    // function funk1(...args){
    //     if(args.length < 2)
    //         return 0
    //     return args[0]+args[args.length - 1]
    // }
    // console.log(funk1(1,2,3,5,6))

    // 2. Zadatak
    // let arr = [1,-1,2,-2,3,-3,4,-4,5,-5]
    // let brojDj = 3 
    // function funk2(arr,f1,f2,brojDj){
    //     for(let i = 0; i<arr.length;i++){
    //     if(f2(arr[i],brojDj) && f1(arr[i]))
    //        console.log(arr[i], " je pozitivan i ", arr[i], " i " , brojDj, " su djeljivi!") 
    //     }
    // }
    // function f2(num,num1){
    //     if(num%num1 == 0)
    //         return 1
    //     else
    //         return 0
    // }
    // function f1(num){
    //     if(num>0)
    //         return 1
    //     else
    //         return 0
    // }
    // funk2(arr,f1,f2,brojDj)
    
    //3. Zadatak
    function funk(f1,len,f2){
        var sum = 0
        for(let i = 0; i < len; i++)
            sum = f2(sum, f1)
        console.log(sum)
    }
    function f1(){
        return prompt("Unesite broj: ")
    }
    function f2(sum,f1){
        let br = +f1()
        return sum + br
    }
    funk(f1,4,f2)
})



