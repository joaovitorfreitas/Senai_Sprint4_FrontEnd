import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


import Fundo from '../../assets/img/pngtree-abstract-dna-background-design-image_333811.jpg'
import Icone from '../../assets/img/Grupodemascara1.png'
import '../../assets/css/login.css'
import axios from 'axios';
import {parseJwt} from '../../services/auth'


import  Pagetopo from '../../Components/Topo/topo';

function Login() {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [error, setError] = useState('')

  let history = useHistory();


  function fazerlogin(event) {

    event.preventDefault();
      
    setError('')

    axios.post('http://localhost:5000/api/login', {
      Email: email,
      Senha : pwd
    })
    .then(rs =>
      {
        if(rs.status === 200) {
          localStorage.setItem('@jwt', rs.data.token);

          console.log(parseJwt().nameid);

          history.push('/Listar')

        }else{         
          history.push('/')
        }

      })
      .catch(() => {
        setError( 'E-mail ou senha inválidos! Tente novamente.')
      })

      console.log(email)
      console.log(pwd)
    }

  return (
    <body>
      <Pagetopo />
      <main>
        <div className="Container">
            <div className="Box">
                <div className="Esquerdo"> 
                <img  className="imgg"src={Fundo}/>
                <div className="itensLogin">
                    <img src={Icone}/>
                    <p className="LetraSPMEGROUP1">SP</p>
                    <p className="LetraSPMEGROUP2">MED</p>
                    <p className="LetraSPMEGROUP3">GROUP</p>
                </div>
                </div>

                <div className="Direito">
                <form onSubmit={fazerlogin}>
                    <input className="inputLogin" placeholder="Login :"
                      value={email}
                      onChange={
                        event => setEmail(event.target.value)
                      }
                    />
                    <input className="inputLogin" placeholder="Senha :"
                      value={pwd}
                      onChange={
                        event => setPwd(event.target.value)
                      }
                    />
                    
                    <p style={{color: "red"}}>{error}</p>

                    <button className="btnLogin"
                    type="submit"
                    >Login</button>
                </form>
                </div>
            </div>


        </div>

    </main>
    </body>
  );
}




export default Login;