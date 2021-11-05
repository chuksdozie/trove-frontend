import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import Grid from "@mui/material/Grid";
import TextBox from "../../components/atoms/textbox/Textbox";
import Text from "../../components/atoms/text/Text";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import { COLORS } from "../../utils/color";
import { login, portfolios, loans, loansHistory } from "../../store/APICalls";
import {
  UserContext,
  LoadingContext,
  StockContext,
  LoanContext,
  LoanHistoryContext,
} from "../../store/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const { setLoading } = useContext(LoadingContext);
  const { setStock } = useContext(StockContext);
  const { setLoan } = useContext(LoanContext);
  const { setLoanHistory } = useContext(LoanHistoryContext);
  const [setLoginDetails] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showNotifier, setShowNotifier] = useState("none");
  const [message, setMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  // const [loading, setLoading] = useState("none");
  const classes = useStyles();

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    setLoginDetails({
      email: email,
      password: password,
    });
    setLoading("flex");
    var users = await login(email, password);
    var port = await portfolios();
    var loaner = await loans();
    var loanerHis = await loansHistory();
    setStock(port);
    setLoan(loaner);
    setLoanHistory(loanerHis);
    setLoading("none");
    if (!users.id) {
      setShowNotifier("flex");
      setMessage(users);
      setModalTitle("Error");
    } else {
      setUser(users);
      setShowNotifier("flex");
      setMessage("You are now logged in");
      setModalTitle("Success");
    }
  };

  return (
    <form>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          margin: "100px 0px",
        }}
      >
        <Grid
          container
          xs={4}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item container xs={12} justifyContent="center">
            <Text
              value={"Login to Trove"}
              fontSize={"22px"}
              fontWeight={500}
              fullWidth={true}
              color={COLORS.green}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <TextBox
              required={true}
              placeholder="email address"
              value={email}
              onChange={(e) => emailChange(e)}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <TextBox
              required={true}
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => passwordChange(e)}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <PrimaryButton
              label={"LOGIN"}
              // type="submit"
              onClick={() => handleSubmit()}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="right"
            alignItems="center"
          >
            <Link to="/signup">
              <Text
                value={"Don't have an account? Sign up"}
                fontSize={"15px"}
                fullWidth={true}
              />
            </Link>
          </Grid>
        </Grid>
        <div
          className={classes.container}
          style={{ display: showNotifier }}
          // onClick={() => setCloseModal("none")}
        >
          <div className={classes.modalBox}>
            <div className={classes.header}>
              <Text value={modalTitle} fontSize="20px" fontWeight="400" />
              <AiOutlineClose onClick={() => setShowNotifier("none")} />
            </div>
            <div className={classes.message}>
              <Text value={message} fontSize="15px" fontWeight="400" />
            </div>
            <Grid xs={4}>
              <Link
                to={modalTitle !== "Error" ? "/home" : "/login"}
                style={{ textDecoration: "none" }}
              >
                <PrimaryButton
                  label={"OK"}
                  onClick={() => setShowNotifier("none")}
                />
              </Link>
            </Grid>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
