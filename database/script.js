///// UNOS KORISNIKA U 'BAZU'///////////////////
//Pregledava jeli to sta smo poslali slovo ili broj
const fp = require('fs')

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
    const contents = fp.readFileSync('file.json', 'utf8')
    let str = ''
    let json = []
    let new_json = []
    let dict = {}
    //Pretvorili smo karaktere u rijeci i spremili u niz json
    for(let i = 0; i < contents.length; i++){
        if(checkChar(contents[i])){
            str += contents[i]
        }
        else if(str.length >= 1){
            json.push(str)
            str = ''
        }
    }
    //Niz smo pretvorili u dictionary i pridruzili clanove 
    for(let i = 0; i < json.length; i+=2){
        if(json[i] === 'id' && i > 0){
            new_json.push(dict)
            dict = {}
            dict[json[i]] = json[i + 1]
        }
        dict[json[i]] = json[i + 1]
    }
    new_json.push(dict)
    return json = new_json
}

//Pozvali smo funkciju i spremili u niz json u kojem su spremljeni svi podaci o ljudima
let json = convertFile()
//Ovako npr mozemo pristupiti svim imenima
let names = json.map(el => el.ime)
console.log(names)


//U slucaju da smo obrisali korisnika moramo popraviti ID
function fixID(json){
    const ids = json.map(el => el.id).length
    for(let i = 0; i < ids; i++)
        json[i]['id'] = i + 1;
    return json;
}

//Unosimo nove korisnike

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

function newUser(ime,prezime,starost,spol){
    fetch("./file.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => {
        let dict = {}
        dict['id'] = '?';
        dict['ime'] = ime;
        dict['prezime'] = prezime;
        dict['starost'] = starost;
        dict['spol'] = spol;
        console.log(dict)
        jsondata.push(dict)
        jsondata = fixID(jsondata);
        let strJson = JSON.stringify(jsondata, null, 2);
        console.log(strJson)
        download('file.json',strJson)   
    });
}

const prompt = require('prompt-sync')();
function inputNewUser(json){
    let answer = prompt("Zelite li unit novog kosrisnika, 'y' za DA ostalo za NE : ");
    if(answer != 'y')
        return json 
    let dict = {}
    dict['id'] = +json[json.length - 1].id + 1;
    const name = prompt("Unesite ime novog korisnika: ");
    dict['ime'] = name;
    const surname = prompt("Unesite prezime novog korisnika: ");
    dict['prezime'] = surname;
    const age = prompt("Unesite starost novog korisnika: ");
    dict['starost'] = age;
    const gender = prompt("Unesite spol novog korisnika: ");
    dict['spol'] = gender;
    json.push(dict)
    return json;
}
json = inputNewUser(json)

//Brisemo duple korisnike
function delSameUsers(json){
    for(let i = 0; i < json.length; i++){
        for(let j = 0; j < json.length; j++)
            if(j != i && json[i] == json[j]){
                const index = json.indexOf(json[j]);
                json.splice(index,1);
            }
    }
    return json
}
json = delSameUsers(json)

//Brisemo nekod korisnika ako nam netriba
function delUsers(json){
    let answer = prompt("Zelite li obrisati nekog kosrisnika, 'y' za DA ostalo za NE : ");
    if(answer != 'y')
        return json 
    const id = prompt("Unesite id korisnika kojeg zelite obrisati: ");
    const ids = json.map(el => el.id)
    for(let i = 0; i < ids.length; i++){
        if(id == ids[i]){
            const index = ids.indexOf(ids[i]);
            json.splice(index,1);
        }
    }
    return json 
}
json = delUsers(json)
json = fixID(json);
//Ucitavamo nove korisnike u file
// null = replace for function, 2 -> indentation 
fp.writeFileSync('./file.json', JSON.stringify(json, null, 2) , 'utf-8');
//Funkcija za printanje korisnika
function printUsers(json){
    let str = ''
    let str1 = ''
    for(let i = 0; i < json.length; i++){
        for(let j in json[i]){
            str1 = j+': '+json[i][j]+'\n'
            str += str1
        }
        str += '\n'
    }
    //console.log(str)
    return str
}
jsonStr = printUsers(json)

