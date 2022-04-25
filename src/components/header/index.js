import styled from "styled-components";
import LogoComponent from "../Logo";
import LogoutIcon from "@mui/icons-material/Logout";
import TextField from "@mui/material/TextField";
import axios from "axios";
import UserContext from "../../contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ target }) {
  const { userData } = useContext(UserContext);
  let navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    console.log(userData);
    const config = { headers: { Authorization: userData } };
    console.log("config: ", config);
    const response = await axios.delete(
      `${process.env.REACT_APP_API}/auth/logout`,
      config
    );

    if (response.status === 200) {
      navigate("/");
    } else alert("Nao foi possivel fazer logout, tente novamente");
  }

  return (
    <Container>
      <Top>
        <LogoComponent origin={"header"} />
        <LogoutIcon onClick={handleLogout} fontSize="inherit" />
      </Top>
      <Search
        id="outlined-basic"
        label={`Pesquise por ${target}`}
        variant="outlined"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 250px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 90%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 50px;
`;

const Search = styled(TextField)`
  width: 60%;
  margin-bottom: 30px;
`;
