import { Button } from "@mui/material";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function GithubButton() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#424445",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button fullWidth={true} color="primary" variant="contained">
          ENTRAR COM O GITHUB
        </Button>
      </ThemeProvider>

      <Container>
        <Line />
        <span>ou</span>
        <Line />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 25px;
`;

const Line = styled.hr`
  color: #c4c4c4;
  width: 50%;
  margin: 0 5px;
  height: 1px;
  border: none;
  border-top: 1px solid #c4c4c4;
`;
