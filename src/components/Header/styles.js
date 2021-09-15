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
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
    display: "block",
  },
}));
