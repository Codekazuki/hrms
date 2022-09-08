// import { Container } from "@mui/system";
// import React from "react";

// const OrgSideMenu = () => {
//   return <Container>Orgsidemenu</Container>;
// };

// export default OrgSideMenu;

import * as React from "react";
import "../index.css";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import AssignmentTurnedInTwoToneIcon from "@mui/icons-material/AssignmentTurnedInTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";

const styles = {
  menu: {
    padding: "1em",
    width: "180px",
    borderRadius: 0,
  },
};

export default function OrgSideMenu() {
  return (
    <Paper style={styles.menu}>
      <MenuList className="SideMenus">
        <ListItemText
          sx={{
            padding: "1em",
            textAlign: "center",
            color: "#6cd642",
            fontWeight: "500",
            m: 1,
          }}
          gutterBottom
          component="div"
        >
          <Link to="/">VENKTER</Link>
        </ListItemText>

        <Link to="/dashboard">
          <MenuItem>
            <ListItemIcon>
              <HomeTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/clients">
          <MenuItem>
            <ListItemIcon>
              <AccountCircleTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Clients</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/projects">
          <MenuItem>
            <ListItemIcon>
              <DashboardCustomizeTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/tasks">
          <MenuItem>
            <ListItemIcon>
              <AssignmentTurnedInTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Tasks</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/payments">
          <MenuItem>
            <ListItemIcon>
              <MonetizationOnTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Payments</ListItemText>
          </MenuItem>
        </Link>
        <MenuItem>
          <ListItemIcon>
            <LogoutTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
