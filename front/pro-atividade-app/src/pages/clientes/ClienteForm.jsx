import React from "react";
import TitlePage from "../../components/TitlePage";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
export default function ClienteForm() {
  const history = useHistory();
  let { id } = useParams();
  return (
    <>
      <TitlePage title={"Cliente Detalhes " + (id != undefined ? id : "")}>
        <Button
          variant="outline-secondary"
          onClick={() => {
            history.push("/cliente/lista");
          }}
        >
          <i className="fas fa-arrow-left me-e"></i>
          Voltar
        </Button>
      </TitlePage>
      <div></div>
    </>
  );
}
