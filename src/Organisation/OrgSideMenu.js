import * as React from "react";
import "../index.css";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import { Link } from "react-router-dom";
import Image from "../assets/logo.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const styles = {
  menu: {
    padding: "1em",
    width: "240px",
    height: "100vh",
    borderRadius: 0,
    left: "0px",
    top: "0px",
    color: "#393A4A",
    backgroundColor: "#FFFFFF",
  },
  setting: {
    position: "absolute",
    width: "60px",
    height: "24px",
    left: "56px",
    top: "85vh",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#6B6C7E",
  },
  logout: {
    position: "absolute",
    width: "60px",
    height: "24px",
    left: "56px",
    top: "90vh",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#6B6C7E",
  },
};

export default function OrgSideMenu() {
  return (
    <Paper style={styles.menu}>
      <MenuList>
        <ListItemText
          sx={{
            padding: "1em",
            textAlign: "center",
            fontWeight: "500",
            m: 1,
          }}
          gutterBottom
          component="div"
        >
          <Box>
            <img src={Image} alt="ouch!/" />
          </Box>
          <Typography
            sx={{
              width: "216px",
              height: "27px",
              fontFamily: "Ubuntu",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "133%",
              textAlign: "center",
            }}
          >
            Prunedge
          </Typography>
        </ListItemText>
        <Link to="/payments">
          <MenuItem style={styles.setting}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
        </Link>
        <Link to="/">
          <MenuItem style={styles.logout}>
            <ListItemIcon>
              <LogoutTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
