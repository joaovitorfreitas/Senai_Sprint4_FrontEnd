import React, { useEffect, useState } from 'react';

import  Pagetopo from '../../Components/Topo/topo';
import '../../assets/css/listar.css'
import {parseJwt} from '../../services/auth'
import axios from 'axios';
import AddImage from '../../assets/img/add.png'
import { Link } from 'react-router-dom';




function Descricao() {
    const [ListarConsultas, setListarConsulta] = useState([]);
    const [idtipo, setidtipo] = useState(0);

    function ListarConsultum(){
        const TokenValor = localStorage.getItem('@jwt')

        setidtipo(parseJwt().nameid)

        if(parseJwt().nameid == 2){
            axios.get('http://localhost:5000/api/Consultum/ConsultasMedicosRelacionada',{
                headers:{
                    'Authorization': `Bearer  ${TokenValor}`
                }
            })
            .then(rs => {
                setListarConsulta(rs.data)
                console.log(ListarConsultas)
            })

        }else if(parseJwt().nameid == 3){
            axios.get('http://localhost:5000/api/Consultum/ConsultasPacientesRelacionada', {
                headers:{
                    'Authorization': `Bearer  ${TokenValor}`
                }
            })
            .then(rs => {
                setListarConsulta(rs.data)
                console.log(ListarConsultas)
            })
        }else if(parseJwt().nameid == 1){
            axios.get('http://localhost:5000/api/Consultum/ListarTodos', {
                headers:{
                    'Authorization': `Bearer  ${TokenValor}`
                }
            })
            .then(rs => {
                setListarConsulta(rs.data)
                console.log(ListarConsultas)
            })
        }
    }

    useEffect(() =>{
        ListarConsultum()
   }, [])

  return ( 
    <body>
        <Pagetopo />
        <main>
           <div className="container3">
               <p style={{fontSize: 32, fontWeight:'bold', color: '#6D19EB'}}>Consultas</p>
           </div>      
           <div className="container4">

            {
                ListarConsultas.map(l => {
                    return(
                        <div className="card1" key={l.idPaciente}>
                            <div>
                               <div className="card2">
                                   <p>{idtipo == 3 ? "Medicos : " : "Pacientes : "}</p>
                                   <p className="TxtLado">{idtipo == 3 ? l.idMedicoNavigation.nomeMedico : l.idPacienteNavigation.nomePaciente}</p>
                               </div>
        
                               <div className="card2">
                                   <p>Data :</p>
                                   <p className="TxtLado">{Intl.DateTimeFormat("pt-BR").format(new Date(l.dataConsulta))}</p>
                               </div>
                               <div className="card2">
                                   <p>Descrição :</p>
                                   <p className="TxtLado">{l.descricao}</p>
                                   {idtipo == 2 && 
                                   <Link to="/descricao" >
                                   <img src={AddImage} style={{width: 21, height: 21, marginLeft:3}}/>
                                   </Link>
                                   
                                   }
                                   
                                   
                               </div>
                            </div>
                            <div>
                                <div className="card2">
                                    <p>Status : </p>
                                    <p className="TxtLado">{l.idSituacaoNavigation.situacao1}</p>
                                </div>
                                <div className="card2">
                                    <p>Especialidade : </p>
                                    <p className="TxtLado">{l.idMedicoNavigation.idEspecialidadeNavigation.nomeEspecialidade}</p>
                                </div>
                                <div className="card2">
                                    {idtipo == 1 && <p>Medicos : </p>}
                                    {idtipo == 1 && <p className="TxtLado">{l.idMedicoNavigation.nomeMedico}</p>}
                                </div>
                            </div>
                        </div>              
                    )
                })
            }
            </div>
        </main>
    </body>
  );
}

export default Descricao;