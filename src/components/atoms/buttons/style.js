import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../../utils/color";

export const useStyles = makeStyles(() => ({
  secondary: {
    color: `${COLORS.green} !Important`,
    borderColor: `${COLORS.green} !Important`,
    padding: `15px !Important`,
  },
  primary: {
    backgroundColor: `${COLORS.green} !Important`,
    color: `${COLORS.white_smoke} !Important`,
    borderColor: `${COLORS.green} !Important`,
    padding: `15px !Important`,
  },
}));
