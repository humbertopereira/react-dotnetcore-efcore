import "./App.css";
import { useState, useEffect } from "react";
import { NavItem } from "react-bootstrap";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

function App() {
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  useEffect(() => {
    atividades.length <= 0
      ? setIndex(1)
      : setIndex(
          Math.max.apply(
            Math,
            atividades.map((i) => i.id)
          ) + 1
        );
  }, [atividades]);

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: index }]);
  }

  function cancelarAtividade() {
    setAtividade({
      id: 0,
    });
  }

  function atualizarAtividade(ativ) {
    console.log(ativ);
    debugger;
    setAtividades(atividades.map((item) => (item.id == ativ.id ? ativ : item)));
    console.log(atividades);
    setAtividade({ id: 0 });
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );
    setAtividades([...atividadesFiltradas]);
  }
  function pegarAtividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  }

  return (
    <>
      <AtividadeForm
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        addAtividade={addAtividade}
        atividades={atividades}
        ativSelecionada={atividade}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
