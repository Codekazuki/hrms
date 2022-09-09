import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Toolbar from "@mui/material/Toolbar";

import { Avatar } from "@mui/material";

export default function OrgAppBar() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "80vw",
        height: "64px",
        right: "0px",
        top: "0px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <AppBar style={{ background: "white", height: "64px" }} position="static">
        <Toolbar style={{ marginLeft: "auto" }}>
          <NotificationsNoneIcon
            style={{
              fill: "#272833",
              margin: "8px",
            }}
          />
          <Avatar
            sx={{
              bgcolor: "#041E44",
              width: "48px",
              height: "48px",
              left: "0px",
              top: "0px",
            }}
          >
            PA
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
