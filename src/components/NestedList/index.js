import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import SelectorContext from "../../contexts/selectorContext";
import axios from "axios";
import UserContext from "../../contexts/userContext";

export default function NestedList() {
  const [open, setOpen] = React.useState([]);
  const { selector } = React.useContext(SelectorContext);
  const { userData } = React.useContext(UserContext);

  const handleClick = async (elem) => {
    setOpen(!open);
    try {
      const config = { headers: { authorization: userData } };
      const search = await axios.post(
        `${process.env.REACT_APP_API}/tests`,
        { period: elem.teacherDiscipline.discipline.term },
        config
      );
      console.log("search: ", search);
    } catch {
      alert("Erro ao carregar provas, tente novamente");
    }
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {selector.map((elem, index) => {
        return (
          <>
            <ListItemButton onClick={() => handleClick(elem)}>
              <ListItemText primary={elem.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </>
        );
      })}
    </List>
  );
}
