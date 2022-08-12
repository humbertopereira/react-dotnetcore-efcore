import React from "react";
import AtividadeItem from "./AtividadeItem";
export default function (props) {
  return (
    <div className="mt-3">
      {props.atividades.map((e) => (
        <AtividadeItem
          key={e.id}
          atividade={e}
          pegarAtividade={props.pegarAtividade}
          handleConfirmModal={props.handleConfirmModal}
        />
      ))}
    </div>
  );
}
