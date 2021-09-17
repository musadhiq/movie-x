import { makeStyles } from "@material-ui/core/styles";
const primaryColor = "#161B22";
const TextColor = "#60E9CD";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: primaryColor,
    color: TextColor,
  },
  title: {
    flexGrow: 1,
    display: "block",
    fontWeight: "bold",
    background:
      "-webkit-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));
