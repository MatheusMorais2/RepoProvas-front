import TextField from "@mui/material/TextField";
import { useState } from "react";
import styled from "styled-components";

export default function SearchBar({ target }) {
  return <Search id="outlined-basic" label={target} variant="outlined" />;
}

const Search = styled(TextField)`
  width: 60%;
  margin-bottom: 30px;
`;
