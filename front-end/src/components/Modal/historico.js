import React, { useEffect, useState } from 'react';
import { Modal, Table, Container } from '../Modal/modal';
import api from '../../services/api';
import { FiX } from 'react-icons/fi';

export default function Historico({close}){


  const [ historico, setHistorico ] = useState([]);

  useEffect(()=>{
    async function loadHistorico(){
      const response = await api.get('historico');
      setHistorico(response.data);
    }

    loadHistorico();
  }, []);


  return(
    <Modal>
       {historico.length === 0 ? (
        <>
          <div className="fechar">
            <FiX size={22} color="#fff" />
            <input className="close" type="button" value="Sair" onClick={close} />
          </div>
          <Container>
            <h2>Nenhum registro cadastrado</h2>
          </Container>
        </> 
       ) :
       <>
          <div className="fechar">
          <FiX size={22} color="#fff" />
          <input className="close" type="button" value="Sair" onClick={close} />
        </div>
        <Table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Origem</th>
                <th scope="col">Destino</th>
                <th scope="col">Km</th>
                <th scope="col">Tempo</th>
              </tr>
            </thead>
            <tbody>
              
              {historico.map((item) => {
                const from = item.origem.split('-');
                console.log(from);
                return(
                  <tr key={item.id}>
                    <td data-label="#">{item.id}</td>
                    <td data-label="Origem">{item.origem}</td>
                    <td data-label="Destino">{item.destino}</td>
                    <td data-label="Km">{item.km}</td>
                    <td data-label="Tempo">{item.tempo}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
       </>
       }
    </Modal>
  );
}