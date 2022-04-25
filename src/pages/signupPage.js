import styled from "styled-components";
import LogoComponent from "../components/Logo";
import GithubButton from "../components/GithubButton";
import SignupForm from "../components/SignupForm";

export default function SignupPage() {
  return (
    <Page>
      <LogoComponent origin={"auth"} />
      <FormContainer>
        <Header>Cadastro</Header>
        <GithubButton />
        <SignupForm />
      </FormContainer>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  height: 20px;
  width: 464px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 31px;
  text-align: center;
`;
