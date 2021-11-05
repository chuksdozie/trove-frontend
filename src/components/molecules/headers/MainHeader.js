import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./style";
import Text from "../../atoms/text/Text";
import { COLORS } from "../../../utils/color";
import trovelogo from "../../../utils/resources/trovelogo.png";
import { UserContext } from "../../../store/UserContext";

const MainHeader = (props) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={trovelogo} alt="logo" />
      <div className={classes.linkCont}>
        <Link to={!user ? "/login" : "/home"} className={classes.navlinks}>
          <Text
            className={classes.navlinks}
            value={"HOME"}
            fontSize="12px"
            color={COLORS.dark_blue}
            fontWeight={500}
          />
        </Link>
        <Link to={!user ? "/login" : "/loans"} className={classes.navlinks}>
          <Text
            className={classes.navlinks}
            value={"LOANS"}
            fontSize="12px"
            color={COLORS.dark_blue}
            fontWeight={500}
          />
        </Link>
        <Link to={!user ? "/login" : "/profile"} className={classes.navlinks}>
          <Text
            className={classes.navlinks}
            value={"PROFILE"}
            fontSize="12px"
            color={COLORS.dark_blue}
            fontWeight={500}
          />
        </Link>
        {/* <Link to="/signup" className={classes.navlinks}>
          <Text
            // className={classes.navlinks}
            value={"SIGNUP"}
            fontSize="12px"
            color={COLORS.dark_blue}
            fontWeight={500}
          />
        </Link> */}
        <Link to="/login" className={classes.navlinks}>
          <Text
            // className={classes.navlinks}
            value={"LOGIN"}
            fontSize="12px"
            color={COLORS.green}
            fontWeight={500}
          />
        </Link>
        <Link className={classes.navlinks} to={"/login"}>
          <Text
            className={classes.navlinks}
            value={"LOGOUT"}
            fontSize="12px"
            color={"red"}
            fontWeight={500}
            onClick={() => localStorage.clear()}
          />
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
