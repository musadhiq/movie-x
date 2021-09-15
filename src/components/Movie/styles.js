import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 200,
    height: 340,
    borderRadius: 10,
  },
  CardContent: {
    height: 120,
    backgroundColor: "#161B22",
    color: "#fff",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    fontSize: "16px",
    height: 50,
    overflow: "hidden",
  },
  CardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  star: {
    width: 15,
    color: "yellow",
    marginRight: "5px",
  },
});
