//Ovako mozemo dobiti varijable/funkcije iz drugog js file-a
//Tako sto pridruzimo neku varijablu tom file i onda preko te varijable mozemo pristupiti bilo kojoj varijabli iz tog filea
const varijabla = require('./logger');
//Build in function os mozemo koristiti za provjeru sranja na mom pc-u 
//Sve te build in funkcije mozemo naci na node.js web stranici
const os = require('os');
const { disconnect } = require('process');

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
let arr1 = Array.from(Array(10).keys());
printArr(arr1)

console.log(varijabla.log)
console.log(varijabla.addNums(2,3))
myFunc("Djani!!")