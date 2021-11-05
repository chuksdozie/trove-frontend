import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../../utils/color";

export const useStyles = makeStyles(() => ({
  textbox: {
    backgroundColor: `${COLORS.white_smoke} !Important`,
    border: ` 1px solid ${COLORS.green} !Important`,
    padding: "10px",
    outline: "none",
    borderRadius: "5px",
    "&:hover": {
      border: ` 1px solid ${COLORS.green} !Important`,
    },
    "&:focus": {
      border: ` 2px solid ${COLORS.green} !Important`,
    },
  },
}));
