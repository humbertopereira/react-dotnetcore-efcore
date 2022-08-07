import React from "react";

export default function Atividades(props) {
  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }
  function prioridadeStyle(param, icone) {
    switch (param) {
      case "Baixa":
        return icone ? "smile" : "success";
      case "Normal":
        return icone ? "meh" : "dark";
      case "Alta":
        return icone ? "frown" : "warning";
      default:
        return "Não definido";
    }
  }
  return (
    <div
      className={
        "card mb-2 shadow-sm border-" +
        prioridadeStyle(props.atividade.prioridade)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">
              {props.atividade.id}
            </span>
            - {props.atividade.titulo}
          </h5>
          <h6>
            Prioridade:
            <span
              className={
                "ms-1 text-" + prioridadeStyle(props.atividade.prioridade)
              }
            >
              <i
                className={
                  "ms-1 far fa-" +
                  prioridadeStyle(props.atividade.prioridade, true)
                }
              ></i>{" "}
              {props.atividade.prioridade}
            </span>
          </h6>
        </div>
        <p className="card-text">{props.atividade.descricao}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => props.pegarAtividade(props.atividade.id)}
          >
            <i className="fas fa-pen me-2"></i>
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger me-2"
            onClick={() => props.handleConfirmModal(props.atividade.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
