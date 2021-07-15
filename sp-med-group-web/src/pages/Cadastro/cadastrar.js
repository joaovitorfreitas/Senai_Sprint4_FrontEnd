import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


import  Pagetopo from '../../Components/Topo/topo';
import '../../assets/css/cadastro.css'
import logoCad from '../../assets/img/logo_spmedgroup_v1.png'
import axios from 'axios';


function Cadastrar() {
    const [Medicos, setMedicos] = useState([]);
    const [Pacientes, setPacientes] = useState ([]);
    const [Decisao, setDecisao] = useState ([]);
    const [idDecisao, setidDecisao] = useState (0);
    const [datainpt, setDatainpt] = useState('');
    const [idPaciente, setidPaciente] = useState(0);
    const [idMedico, setidMedico] = useState(0);
    let history = useHistory();



    function BuscarPacientes(){
        const TokenValor = localStorage.getItem('@jwt')

        axios.get('http://localhost:5000/api/pacientes', {
            headers:{
                'Authorization': `Bearer  ${TokenValor}`
            }
        })
        .then(
            rs => {
                setPacientes(rs.data)
                console.log(Pacientes)
            }
        )
    }
    function BuscarMedicos(){
        const TokenValor = localStorage.getItem('@jwt')

        axios.get('http://localhost:5000/api/Medicos', {
            headers:{
                'Authorization': `Bearer  ${TokenValor}`
            }
        })
        .then(
            rs => {
                setMedicos(rs.data)
                console.log(Medicos)
            }
        )

    }

    function BuscarSituacao(){
        const TokenValor = localStorage.getItem('@jwt')

        axios.get('http://localhost:5000/api/Situacaos', {
            headers:{
                'Authorization': `Bearer  ${TokenValor}`
            }
        })
        .then(
            rs => {
                setDecisao(rs.data)
                console.log(Decisao)
            }
        )
    }

    function SubmitItens(){
        const TokenValor = localStorage.getItem('@jwt')
        console.log('enviado ....')

        axios.post('http://localhost:5000/api/Consultum',{
            idMedico: idMedico,
            idPaciente: idPaciente,
            idSituacao: idDecisao,
            dataConsulta: datainpt
        }, {
            headers:{
                'Authorization': `Bearer  ${TokenValor}`
            }
        })
        .then(
            history.push('/Listar')
        )

    }
    
    useEffect(() =>{
        BuscarSituacao()
        BuscarMedicos()
        BuscarPacientes()
    }, [])



  return (
      <body>
        <Pagetopo />
        <main>
         <div className="container2">
             <div className="boxCadastro">
                 <div className="boxInside">
                    <div className="titleLine">
                        <div>
                            <p>Cadastrar Consulta</p>
                            <div className="LinhaStyle">
                            </div>
                        </div>
                    </div>     

                    <form onSubmit={SubmitItens}>

                    <div className="inptPaciencite">
                        <div>
                            <p className="Textoinptcadastro">Nome Paciente</p>
                            <select class="inputextcadastro"
                                onChange={(event) => setidPaciente(event.target.value)}
                            >
                            {Pacientes.map(i =>{
                                    return(
                                        <option value={i.idPaciente}>{i.nomePaciente}</option>
                                    )
                                })}
                                
                            </select>
                        </div>

                        <div>
                            <p className="Textoinptcadastro">Data Consulta</p>
                            <input className="inputextcadastro" type="date"
                                value={datainpt}
                                onChange={(event) => setDatainpt(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="inptMedico">
                        <div  className="divMedicoInpt">
                            <p className="Textoinptcadastro">Nome Medico</p>
                            <select class="inputextcadastro"
                              onChange ={(event) => setidMedico(event.target.value)}
                            >
                            {Medicos.map(i =>{
                                    return(
                                        <option value={i.idMedico}>{i.nomeMedico}</option>
                                    )
                                })}
                                
                            </select>
                        </div>

                        <div  class="divMedicoInpt">
                    <p class="Textoinptcadastro">Situação</p>
                        <select class="inputextcadastro2"
                            onChange={(event) => setidDecisao(event.target.value)}
                        >                          
                        {Decisao.map(i =>{
                                    return(
                                        <option value={i.idSituacao}>{i.situacao1}</option>
                                    )
                                })}
                        </select>
                        </div>
                    </div>   

                    <div className="btnImgCadastro">
                        <button className="btnCadastrar" type='submit'>Cadastrar</button>
                    </div>   
                    </form>

                </div>
            </div>
         </div>
        </main>
      </body>

  );
}

export default Cadastrar;