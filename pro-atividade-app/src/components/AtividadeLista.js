import React from "react";
import Atividade from "./Atividade";
export default function (props) {
  return (
    <div className="mt-3">
      {props.atividades.map((e) => (
        <Atividade
          key={e.id}
          atividade={e}
          deletarAtividade={props.deletarAtividade}
          pegarAtividade={props.pegarAtividade}
        />
      ))}
    </div>
  );
}
