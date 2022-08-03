import { makeStyles } from "@mui/styles";
import Image from "./images/bgIllustration.svg";

export const useAppStyles = makeStyles({
  root: {
    maxWidth: "100% !important",
    height: "100vh",
    background: "#0050c8",
    backgroundImage: `url(${Image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  },
});
