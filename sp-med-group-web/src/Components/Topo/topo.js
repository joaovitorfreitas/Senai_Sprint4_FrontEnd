//import '../../asset
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/img/logo_spmedgroup_v2.png'
import '../../assets/css/header.css';
import {userAuth, parseJwt} from '../../services/auth'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";



function Topo() {
  const [btnLoad, sebtnLoad] = useState(false);
  const [idTipo, setIdTipo] = useState(0)

  let history = useHistory();


  function ValidarLoginbtn(){

    if(userAuth()){
      console.log('entrou')
      sebtnLoad(true)

      console.log(btnLoad)

        setIdTipo(parseJwt().nameid)
        console.log(idTipo, 'Tipo do user')

    }else{
      sebtnLoad(false)
      console.log('não ta logado')
    }

    if(btnLoad === true){
      console.log('é')
    }else{
      console.log('não é')
    }
  }

  function removerToken(){
    localStorage.removeItem('@jwt')

    history.push('/')

  }

  
  
  useEffect(() => {
    ValidarLoginbtn()
  }, [btnLoad])
  

  return (
    <header>

      <img  className="imgheader" src={Logo}/>
      
      { btnLoad === false &&  <button >Login</button>}

   
      { btnLoad === true &&  <div style={{display:'flex'}}>{ idTipo == 1 &&   <button style={{marginLeft: 50}} onClick={() => history.push('/cadastro')}>cadastro</button>} <button onClick={removerToken}>sair</button>  </div>}


    



    </header>
  );
}





export default  Topo;