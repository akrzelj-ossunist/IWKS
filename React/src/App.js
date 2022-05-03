import './form.css'
import { useState } from 'react'

function App() {

  //Koristili smo se funkcijom useState preko koje smo dohvatili value koji je spremljen u 'input1' te smo dole u html poslali funkciju getPass()
  //U htmlu naredba ide --->onInput={e => getPass(e.target.value)}<----
  //Preko onInput pozivamo funkciju getPass u koju saljemo value sa naredbom e.target.value
  const [input1, getPass] = useState('');
  const [input2, getRPass] = useState('');

  //Kod funkcija najbolje korstiti 'PascalLetters' kada svaka rijec zapocinje velikim slovom npr
  //   netocno: checkPass
  //   tocno:   CheckPass
  const CheckPass = () => {
    if(input1 != input2)
      return (
      <>
        <p>Passwords are not matching!!!</p>
      </>
      )
    else
      return (
      <>
        <input className="botun" type="submit" name="botun" value="Next"></input>
      </>
      )
  };

  return (
    <div className='divForm'>
      <h1>Hello World</h1>
      <form className="form">
        <span>
        Username: <input type="Text" name="uname"></input><br></br><br></br>
        E-mail: <input type="email" name="email"></input><br></br><br></br>
        Password: <input type="password" onInput={e => getPass(e.target.value)} name="pass"></input><br></br><br></br>
        Repeat password: <input type="password" onInput={e => getRPass(e.target.value)} name="rpass"></input><br></br><br></br>
        </span>
        <CheckPass />
      </form>
    </div>
  );
}
export default App;
