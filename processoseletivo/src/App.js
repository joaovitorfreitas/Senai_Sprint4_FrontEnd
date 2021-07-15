import './App.css';
import React, { useState, useEffect } from 'react';
import api from '../src/Services/api'



function App() {
  
const [NomeUser, setNomeUser] = useState('');



 const SubmitBottom = () =>{
    const response = api.get('/Pacientes')

   console.log(response);
  } 

  useEffect(() =>{
    SubmitBottom()
  }, [])



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
          
                  
            </tbody>
          </table>
    </div>
  );
}

export default App;
