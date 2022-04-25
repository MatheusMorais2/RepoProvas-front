import { useState } from "react";
import Header from "../components/header";
import styled from "styled-components";
import SelectButtons from "../components/SelectButtons";
import NestedList from "../components/NestedList";

export default function MainPage() {
  const [target, setTarget] = useState("");
  return (
    <>
      <Header target={target} />
      <MainContainer>
        <Main>
          <SelectButtons />
          <NestedList />
        </Main>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
`;
