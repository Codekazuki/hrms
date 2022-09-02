import { Box, Typography } from "@mui/material";
import React from "react";

const home = ({ children }) => {
  return (
    <Box sx={{}}>
      <Typography
        variant="h3"
        sx={{
          color: "#E5E5E5",
        }}
      >
        HrPay
      </Typography>
      <Typography
        sx={{
          color: "#B3CDFF",
          weight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          // font: "Ubuntu",
        }}
      >
        This is dummy text that will be replaced later by <br />
        proper content. The replacement text shouldn't be <br />
        more than three lines
      </Typography>
      {children}
    </Box>
  );
};
export default home;
