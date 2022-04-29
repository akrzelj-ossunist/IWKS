const number = +prompt("Unesite broj")/* + pretvara string u broj */
if(number == 0)
console.log("Broj je nula")
else if(number % 2 == 0)
console.log("Broj je paran")
else
console.log("Broj je neparan")

let rez = (number == 0) ? "broje je nula" : (number % 2 == 0) ? "broj je paran" : "broj nije paran";
console.log(rez)
switch(a = number%2){
    case a = 0:
        console.log("Broj je paran")
        break;
    case a = 1:
        console.log("Broj nije paran")
        break;
    default:
        console.log("Broj nije ni paran ni neparan")
        break;
}
var num = 155
while(num > 104){
    if(num % 10 == 0)
    console.log('num',num)
    num--
}
var sum = 0
for(var i = 50; i < 100; i++)
    sum+=i
console.log(sum)