const form = document.getElementsByClassName('form')[0]
const accept = document.getElementsByName('Accept')[0]
const formView = document.getElementsByName('userInput')[0]

formView.addEventListener('click', () => {
  form.classList.toggle('active')
})
accept.addEventListener('click', () => {
  form.classList.toggle('active')
})

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

function putInJson(strJson){
  const fp = require('fs');
  fp.writeFileSync('./file.json',strJson, 'utf-8');
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
      putInJson(strJson);
  });
}
