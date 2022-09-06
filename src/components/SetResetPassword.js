import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";

const SetResetPassword = () => {
  return (
    <Box>
      <Paper
        sx={{
          background: "white",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            padding: "1rem",
          }}
        >
          Reset password
        </Typography>
        <Stack direction="column" spacing={2} margin={2}>
          <TextField
            required
            id="outlined-required"
            label="Email address"
            defaultValue="example@mail.com"
            InputProps={{ readOnly: true }}
          />
        </Stack>
        <Stack direction="row" spacing={1} margin={2}>
          <TaskAltIcon fontSize="small" />
          <Typography>Uppercase</Typography>
          <TaskAltIcon fontSize="small" />
          <Typography>Lowercase</Typography>
          <TaskAltIcon fontSize="small" />
          <Typography>At least 1 number</Typography>
        </Stack>
        <Stack direction="row">
          <TaskAltIcon fontSize="small" />
          <Typography>8 or more characters</Typography>
          <TaskAltIcon fontSize="small" />
          <Typography>special character</Typography>
        </Stack>

        <Link
          style={{ textDecoration: "none" }}
          to="/passwordresetsuccess"
          sx={{ color: "white" }}
        >
          <Button
            variant="contained"
            sx={{
              margin: 2,
              width: "90%",
              textTransform: "none",
            }}
          >
            Reset Password
          </Button>
        </Link>
        <Typography sx={{ textAlign: "left", padding: "15px" }}>
          {" "}
          <Link style={{ textDecoration: "none" }} to="/signin">
            Back to Sign in{" "}
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SetResetPassword;
