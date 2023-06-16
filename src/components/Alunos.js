import React from "react";
import Table from 'react-bootstrap/Table'

class Alunos extends React.Component{

    constructor(props){
    super(props);

    this.state = {
        alunos:[
            {'id':1,'nome':'Luiz Fernando','email':'luiz@teste.com'},
            {'id':2,'nome':'João Felipe','email':'joao@teste.com'},
            {'id':3,'nome':'Paulo','email':'paulo@teste.com'}
        ]
    }
    }
    render(){
        return(
            <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
                {
                    this.state.alunos.map((aluno) =>
                    <tr>
                    <td>{aluno.nome}</td>
                    <td>{aluno.email}</td>
                    <td>Atualizar Excluir</td>
                   
                  </tr>)
                }
              
            </tbody>
          </Table>
        )
    }
       
    
}

export default Alunos; 