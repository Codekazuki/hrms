import { Container } from "@mui/material";
import { useAppStyles } from "./styled.app";

function App() {
  const classes = useAppStyles();
  return <Container className={classes.root}></Container>;
}

export default App;
