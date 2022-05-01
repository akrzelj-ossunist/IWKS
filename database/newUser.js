const form = document.getElementsByClassName('form')[0]
const accept = document.getElementsByName('Accept')[0]
const formView = document.getElementsByName('userInput')[0]
const exitForm = document.getElementsByName('exit')[0]
const buttons = document.getElementsByClassName('buttons')[0]

formView.addEventListener('click', () => {
  form.classList.toggle('active')
  buttons.classList.toggle('active')
})
accept.addEventListener('click', () => {
  form.classList.toggle('active')
  buttons.classList.toggle('active')
})
exitForm.addEventListener('click', () => {
  form.classList.toggle('active')
  buttons.classList.toggle('active')
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
      download('./file.json',strJson)
  });
}

//Delete user
const delButton = document.getElementsByName('userDelete')[0]
const acceptDel = document.getElementsByName('delete')[0]
const exitDel = document.getElementsByName('exitDel')[0]
const formView1 = document.getElementsByClassName('formDel')[0]
const buttonView = document.getElementsByClassName('buttons')[0]
  
delButton.addEventListener('click', () => {
    formView1.classList.toggle('active')
    buttonView.classList.toggle('active')
})
acceptDel.addEventListener('click', () => {
    formView1.classList.toggle('active')
    buttonView.classList.toggle('active')
})
exitDel.addEventListener('click', () => {
    formView1.classList.toggle('active')
    buttonView.classList.toggle('active')
})

function delUser(id,ime){
  fetch("./file.json")
  .then(response => {
  return response.json();
  })
  .then(jsondata => {
      for(let i = 0; i < jsondata.length; i++){
          console.log(jsondata[i]['id'],+id,jsondata[i]['ime'].toUpperCase(),ime.toUpperCase())
          if(jsondata[i]['id'] == +id && jsondata[i]['ime'].toUpperCase() == ime.toUpperCase()){
            const index = jsondata.indexOf(jsondata[i]);
            jsondata.splice(index,1);
          }
      }
      jsondata = fixID(jsondata);
      let strJson = JSON.stringify(jsondata, null, 2);
      download('./file.json',strJson)
  });
}

//Print all users
const printUsers = document.getElementsByName('printUsers')[0]

printUsers.addEventListener('click', () => {
  fetch("./file.json")
  .then(response => {
  return response.json();
  })
  .then(jsondata => {
      let strJson = ''
      for(let i = 0; i < jsondata.length; i++){
        for(let key in jsondata[i]){
          strJson += (key+': '+jsondata[i][key]+'<br>')
        }
        strJson += '<br>'
      }
      strJson += '<button onClick="window.location.reload();">Exit Page</button>'
      document.writeln(strJson)
  });
})

//Print certain user
const findUser = document.getElementsByName('findUsers')[0]
const searchUser = document.getElementsByName('search')[0]
const exitSearch = document.getElementsByName('exitSearch')[0]
const showForm = document.getElementsByClassName('printUser')[0]
const viewButtons = document.getElementsByClassName('buttons')[0]

findUser.addEventListener('click', () => {
  showForm.classList.toggle('active')
  viewButtons.classList.toggle('active')
})
searchUser.addEventListener('click', () => {
  showForm.classList.toggle('active')
  viewButtons.classList.toggle('active')
})
exitSearch.addEventListener('click', () => {
  showForm.classList.toggle('active')
  viewButtons.classList.toggle('active')
})

function findUsers(ime,prezime){
  fetch("./file.json")
  .then(response => {
  return response.json();
  })
  .then(jsondata => {
    let strJson = ''
    for(let i = 0; i < jsondata.length; i++){
      if(jsondata[i]['ime'].toUpperCase() == ime.toUpperCase() && jsondata[i]['prezime'].toUpperCase() == prezime.toUpperCase()){
        for(let key in jsondata[i]){
          strJson += (key+': '+jsondata[i][key]+'<br>')
        }
        strJson += '<br>'
      } 
    }
    strJson += '<button onClick="window.location.reload();">Exit Page</button>'
    document.writeln(strJson)
  });
}