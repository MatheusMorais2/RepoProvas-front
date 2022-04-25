import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/userContext";
import TestsContext from "../contexts/testsContext";
import SelectorContext from "../contexts/selectorContext";
//font-family: 'Poppins', sans-serif;
/* import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'; */

import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";
import SignupPage from "../pages/signupPage";

export default function App() {
  const [userData, setUserData] = useState({ id: "", token: "" });
  const [tests, setTests] = useState("");
  const [selector, setSelector] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <TestsContext.Provider value={{ tests, setTests }}>
        <SelectorContext.Provider value={{ selector, setSelector }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </SelectorContext.Provider>
      </TestsContext.Provider>
    </UserContext.Provider>
  );
}
