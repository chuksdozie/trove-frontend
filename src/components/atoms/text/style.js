import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  primary: {
    color: (props) => props.color,
    fontSize: "50px",
    border: "50px",
    padding: "0px 20px",
  },
}));
