import { Box, Container } from "@mui/material";
import Image from "./images/bgIllustration.svg";

function App() {
  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          borderRadius: "0px",
          background: "#0050c8",
          backgroundImage: `url(${Image})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      ></Box>
      <Box></Box>
    </Container>
  );
}

export default App;
