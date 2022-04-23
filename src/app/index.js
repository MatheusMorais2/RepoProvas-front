import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/userContext";
//font-family: 'Poppins', sans-serif;
/* import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'; */

import LoginPage from "../pages/loginPage";
import SignupPage from "../pages/signupPage";

export default function App() {
  const [userData, setUserData] = useState({ id: "", token: "" });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
