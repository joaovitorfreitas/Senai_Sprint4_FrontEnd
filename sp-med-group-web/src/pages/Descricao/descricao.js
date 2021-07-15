import React from 'react';

import  Pagetopo from '../../Components/Topo/topo';
import '../../assets/css/descricao.css'



function Descricao() {
  return ( 
    <body>
        <Pagetopo />
        <main>
            <div className="container">
                <div className="box">
                    <div className="DivDesc">
                        <p className="Desctxt">Descrição :</p>
                        <input className="inputDescricao"/>
                    </div>
                    <button className="btn">Salvar</button>
                </div>
            </div>
        </main>
    </body>
  );
}

export default Descricao;