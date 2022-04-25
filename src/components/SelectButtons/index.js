import styled from "styled-components";
import { Button } from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import TestsContext from "../../contexts/testsContext";
import UserContext from "../../contexts/userContext";
import SelectorContext from "../../contexts/selectorContext";

export default function SelectButtons() {
  const [discipline, setDiscipline] = useState("outlined");
  const [teacher, setTeacher] = useState("outlined");
  const { setTests } = useContext(TestsContext);
  const { userData } = useContext(UserContext);
  const { selector, setSelector } = useContext(SelectorContext);
  const [disciplines, setDisciplines] = useState([]);

  async function handleDiscipline(e) {
    e.preventDefault();
    try {
      const config = { headers: { authorization: userData } };
      const search = await axios.get(
        `${process.env.REACT_APP_API}/disciplines`,
        config
      );
      setSelector(search.data);
      setDiscipline("contained");
      setTeacher("outlined");
    } catch {
      alert("Falha ao buscar provas");
    }
  }

  async function handleTeacher(e) {
    e.preventDefault();
    try {
      const config = { headers: { authorization: userData } };
      const search = await axios.get(
        `${process.env.REACT_APP_API}/tests`,
        config
      );
      setSelector(search.data);
      setDiscipline("outlined");
      setTeacher("contained");
    } catch {
      alert("Falha ao buscar provas");
    }
  }

  async function handleAdd(e) {
    e.preventDefault();
    alert("Funcionalidade ainda nao aplicada");
  }

  return (
    <Div>
      <Button variant={discipline} onClick={handleDiscipline}>
        DISCIPLINA
      </Button>
      <Button variant={teacher} onClick={handleTeacher}>
        PESSOAS INSTRUTORA
      </Button>
      <Button variant="outlined" onClick={handleAdd}>
        ADICIONAR
      </Button>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
  margin-bottom: 50px;
`;
