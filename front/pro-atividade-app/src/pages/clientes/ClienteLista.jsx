import React from "react";
import TitlePage from "../../components/TitlePage";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const clientes = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Otto",
    contato: "10665544",
    situacao: "Ativo",
  },
  {
    id: 2,
    nome: "Amazon",
    responsavel: "Willian",
    contato: "55448899",
    situacao: "Ativo",
  },
  {
    id: 3,
    nome: "Google",
    responsavel: "Jack",
    contato: "66554433",
    situacao: "Em Análise",
  },
  {
    id: 4,
    nome: "Facebook",
    responsavel: "Kevin",
    contato: "75881515",
    situacao: "Ativo",
  },
  {
    id: 5,
    nome: "Twitter",
    responsavel: "Jack",
    contato: "00256548",
    situacao: "Ativo",
  },
];

export default function ClienteLista() {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState("");

  const handleInputChange = (e) => {
    setTermoBusca(e.target.value);
    console.log(termoBusca);
  };

  //cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1
  //cliente.contato.toLocaleLowerCase().indexOf(termoBusca) !== -1
  const clientesFiltrados = clientes.filter((cliente) => {
    return Object.values(cliente)
      .join(" ")
      .toLocaleLowerCase()
      .includes(termoBusca.toLocaleLowerCase());
  });
  const novoCliente = () => {
    navigate.push("/cliente/detalhe/");
  };
  return (
    <>
      <TitlePage title="Cliente lista">
        <Button variant="outline-secondary" onClick={novoCliente}>
          <i className="fas fa-plus me-e"></i>
          Novo cliente
        </Button>
      </TitlePage>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text>Buscar</InputGroup.Text>
        <FormControl
          placeholder="Buscar por nome do cliente"
          onChange={handleInputChange}
        />
      </InputGroup>
      <table className="table table-striped table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Responsável</th>
            <th scope="col">Contato</th>
            <th scope="col">Situação</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.situacao}</td>
              <td>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => {
                      navigate(`/cliente/detalhe/${cliente.id}`);
                    }}
                  >
                    <i className="fas fa-user-edit me-2"></i>
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="fas fa-user-times me-2"></i>
                    Desativar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
