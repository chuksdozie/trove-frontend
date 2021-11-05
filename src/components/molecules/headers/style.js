import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    height: "70px",
    width: "100%",
    backgroundColor: "white",
    overflowY: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px 2px 2px 2px rgba(50,200,200,0.1)",
  },
  linkCont: {
    height: "100%",
    overflowY: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navlinks: {
    display: "flex",
    justifySelf: "right",
    padding: "0px 2px",
    textDecoration: "none",
  },
  logo: {
    height: "40px",
    padding: "0px 15px",
  },
}));
