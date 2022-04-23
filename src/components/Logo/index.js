import logo from "./logo.png";
import styled from "styled-components";

export default function LogoComponent() {
  return <Logo src={logo} alt="RepoProvas logo" />;
}

const Logo = styled.img`
  margin-top: 55px;
  margin-bottom: 20vh;
`;
