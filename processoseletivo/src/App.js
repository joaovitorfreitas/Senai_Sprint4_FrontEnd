import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
const [ListaGit, setLista] = useState([]);
const [NomeUser, setNomeUser] = useState('');
const [validador, SetValidador] = useState('')



 const SubmitBottom = (event) =>{

     axios.get(`https://api.github.com/users/${NomeUser}/repos`)
    .then(function (response) {
      setLista(response.data)
      console.log("nao gosto disso ", ListaGit);
      console.log("nao gosto disso ", response.status);
      SetValidador('y')
      console.log("kkkkkkkk", validador)
      setNomeUser('');
    }).catch(function (error) {
      SetValidador('n');
      console.log("adada : ", validador);
      console.log("erroooooo : ", error);
    })
    
    event.preventDefault();
  } 



  return (
    <div>
        <div>
          <form onSubmit={SubmitBottom}>
          <label>Nome GitHub</label>
          <input 
          value={NomeUser}
          onChange={e => setNomeUser(e.target.value)}   
          ></input>
          <button type="submit"></button>
          <p>{validador === 'y' ? 'Correto' : 'Incorreto'}</p>
          </form>
        </div>
        <table  cellspacing="15">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th> 
                <th>descricão</th>
                <th>criação</th>
                <th>tamanho</th>
              </tr>
            </thead>
            <tbody>
              {ListaGit.map(i =>{
                return(
                  <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.description}</td>
                  <td>{i.created_at}1</td>
                  <td>{i.size}</td>
                </tr>       )
              })}
                  
            </tbody>
          </table>
    </div>
  );
}

export default App;
