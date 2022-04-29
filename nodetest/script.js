//Ovako mozemo dobiti varijable/funkcije iz drugog js file-a
//Tako sto pridruzimo neku varijablu tom file i onda preko te varijable mozemo pristupiti bilo kojoj varijabli iz tog filea
const varijabla = require('./logger');
//Build in function os mozemo koristiti za provjeru sranja na mom pc-u 
//Sve te build in funkcije mozemo naci na node.js web stranici
const os = require('os');
 
console.log(os.hostname())

function myFunc(name){
    console.log(module.path +'\\'+name);
    console.log(module.filename);
}

//Dictionary in javascript
let dict = {}
dict['node'] = 'js';
console.log(dict)
//Printanje dictionarya u js-u
for(let key in dict){
    console.log('Kljuc: '+key);
    console.log('Value: '+dict[key]);
}

//Arrow function for printing an array used function .forEach() wich takes each element 1 by 1 from array
let printArr = arr1 => arr1.forEach((element) => console.log(element));
//Creates array of 10 elements from 1-10
let arr1 = Array.from(Array(2).keys());
printArr(arr1)

console.log(varijabla.log)
console.log(varijabla.addNums(2,3))
myFunc("Djani!!")

const fp = require('fs')
//Napravili smo novi file imena file1 i u njega smo napisali 'Hello content'
fp.appendFile('file1.txt','\n'+module.path, function(){})
//Napravili smo novi file imena file2 i u njega nist ne dopisuje samo ga kreiramo i sa 'w' govorimo da je u pisanje(write) modu
fp.open('file2.txt','w',function(){})
//Brise file
fp.unlink('file2.txt',function(){})
//Preimenuje file
fp.rename('file1.txt','djonSina.txt',function(){})

//Pregledava jeli to sta smo poslali slovo ili broj
function checkChar(char){
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
    for(let i = 0; i < chars.length; i++){
        if(chars[i] == char)
            return 1
    }
    return 0
}

function convertFile(){
    //Cita file char po char
    const contents = fp.readFileSync('file.txt', 'utf8')
    let str = ''
    let employee = []
    let new_employee = []
    let dict = {}
    let key = ''
    //Pretvorili smo karaktere u rijeci i spremili u niz employee
    for(let i = 0; i < contents.length; i++){
        if(checkChar(contents[i])){
            str += contents[i]
        }
        else if(str.length >= 1){
            employee.push(str)
            str = ''
        }
    }
    //Niz smo pretvorili u dictionary i pridruzili clanove 
    for(let i = 0; i < employee.length; i+=2){
        if(employee[i] === 'ime' && i > 0){
            new_employee.push(dict)
            dict = {}
            dict[employee[i]] = employee[i + 1]
        }
        dict[employee[i]] = employee[i + 1]
    }
     new_employee.push(dict)
    return employee = new_employee
}

//Pozvali smo funkciju i spremili u niz employee u kojem su spremljeni svi podaci o ljudima
let employee = convertFile()
//Ovako npr mozemo pristupiti svim imenima
let names = employee.map(el => el.starost)
console.log(names)
