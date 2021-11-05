import React, { useState, useContext } from "react";
import { useStyles } from "./style";
import Grid from "@mui/material/Grid";
import TextBox from "../../components/atoms/textbox/Textbox";
import Text from "../../components/atoms/text/Text";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import { COLORS } from "../../utils/color";
import { signup } from "../../store/APICalls";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LoadingContext } from "../../store/UserContext";

const Signup = () => {
  const classes = useStyles();
  const { setLoading } = useContext(LoadingContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankHolder, setBankHolder] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [showNotifier, setShowNotifier] = useState("none");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };

  const handlePhonenumberChange = (e) => {
    setPhonenumber(e.target.value);
    console.log(phonenumber);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
    console.log(bankName);
  };

  const handleBankHolderChange = (e) => {
    setBankHolder(e.target.value);
    console.log(bankHolder);
  };

  const handleBankAccountNumberChange = (e) => {
    setBankAccountNumber(e.target.value);
    console.log(bankAccountNumber);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
    console.log(dateOfBirth);
  };

  const handleSignup = async () => {
    setLoading("flex");
    console.log("handling");
    const signupDetails = await signup(
      firstName,
      lastName,
      phonenumber,
      email,
      password,
      bankName,
      bankHolder,
      bankAccountNumber,
      dateOfBirth
    );
    setLoading("none");
    console.log(signupDetails);
    if (!signupDetails.id) {
      console.log(signupDetails.error);
      setShowNotifier("flex");
      setModalTitle("Error");
      setMessage(signupDetails.error);
    } else {
      console.log(signupDetails);
      setShowNotifier("flex");
      setModalTitle("Success");
      setMessage("Account Created Successfully. Login to Continue");
      setFirstName("");
      setLastName("");
      setPhonenumber("");
      setPassword("");
      setEmail("");
      setBankName("");
      setBankHolder("");
      setBankAccountNumber("");
      setDateOfBirth("");
    }
  };

  return (
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
            value={"Signup to Trove"}
            fontSize={"22px"}
            fontWeight={500}
            fullWidth={true}
            color={COLORS.green}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            placeholder="first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            placeholder="last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            placeholder="phone number"
            value={phonenumber}
            onChange={handlePhonenumberChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            placeholder="email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            placeholder="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            placeholder="bank name"
            value={bankName}
            onChange={handleBankNameChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            placeholder="bank holder name"
            value={bankHolder}
            onChange={handleBankHolderChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            placeholder="bank account number"
            value={bankAccountNumber}
            onChange={handleBankAccountNumberChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <TextBox
            type="date"
            placeholder="date of birth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <PrimaryButton
            label={"SIGNUP"}
            onClick={() => {
              handleSignup();
            }}
          />
        </Grid>
        <Grid item container xs={12} justifyContent="right" alignItems="center">
          <Text
            value={"Already Have an account? Login"}
            fontSize={"15px"}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <div
        className={classes.notifyContainer}
        style={{ display: showNotifier }}
        // onClick={() => setCloseModal("none")}
      >
        <div className={classes.notifyModalBox}>
          <div className={classes.notifyHeader}>
            <Text value={modalTitle} fontSize="20px" fontWeight="400" />
            <AiOutlineClose onClick={() => setShowNotifier("none")} />
          </div>
          <div className={classes.notifyMessage}>
            <Text value={message} fontSize="15px" fontWeight="400" />
          </div>
          <Grid xs={4}>
            <Link
              to={modalTitle !== "Error" ? "/login" : "/signup"}
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
  );
};

export default Signup;
