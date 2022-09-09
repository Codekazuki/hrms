import React from "react";
import SetResetPassword from "./components/SetResetPassword";
import ResetPassword from "./components/ResetPassword";
import Signin from "./components/Signin";
import AuthLayout from "./Layout/AuthLayout";
import ResetEmail from "./components/ResetEmail";
import PasswordResetLogo from "./components/PasswordResetLogo";
import PasswordResetSuccess from "./components/PasswordResetSuccess";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OrgDashBoard from "./Organisation/OrgDashBoard";
import OrgAppBar from "./Organisation/OrgAppbar";
import OrgSideMenu from "./Organisation/OrgSideMenu";
import OrgCards from "./Organisation/OrgCards";
import OrgTable from "./Organisation/OrgTable";
import OrgForm from "./Organisation/OrgForm";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
    fontWeightLight: 400,
    fontWeightBold: 700,
  },
  AppBar: {
    color: "white",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/resetemail" element={<ResetEmail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/setresetpassword" element={<SetResetPassword />} />
            <Route
              path="/passwordresetsuccess"
              element={<PasswordResetSuccess />}
            />
          </Route>
          <Route path="/passwordresetlogo" element={<PasswordResetLogo />} />
          <Route path="/orgdashboard" element={<OrgDashBoard />} />
          <Route path="/orgsidemenu" element={<OrgSideMenu />} />
          <Route path="/orgappbar" element={<OrgAppBar />} />
          <Route path="/orgcards" element={<OrgCards />} />
          <Route path="/orgtable" element={<OrgTable />} />
          <Route path="/orgform" element={<OrgForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
