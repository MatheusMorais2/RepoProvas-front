import logo from "./logo.png";
import styled from "styled-components";

export default function LogoComponent({ origin }) {
  return <Logo origin={origin} src={logo} alt="RepoProvas logo" />;
}

const Logo = styled.img`
  margin-bottom: ${(props) => {
    if (props.origin === "auth") return "20vh";
    else return 0;
  }};
`;
