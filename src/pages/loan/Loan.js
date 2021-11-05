import React, { useState, useContext } from "react";
import { useStyles } from "./style";
import Text from "../../components/atoms/text/Text";
import { Grid } from "@mui/material";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import TextBox from "../../components/atoms/textbox/Textbox";
import Table from "../../components/atoms/tables/Table";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext, LoadingContext } from "../../store/UserContext";
import { requestLoan } from "../../store/APICalls";

const Loan = (props) => {
  const classes = useStyles();
  const { setLoading } = useContext(LoadingContext);
  const { user } = useContext(UserContext);
  const [closeEditModal, setCloseEditModal] = useState("none");
  const [loanValue, setLoanValue] = useState();
  const [durationValue, setDurationValue] = useState();
  const [showNotifier, setShowNotifier] = useState("none");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleLoanClick = async () => {
    setLoading("flex");
    console.log("handling");
    const loanRequestDetails = {
      amount: loanValue,
      duration: durationValue,
    };
    const myloan = await requestLoan(
      loanRequestDetails.amount,
      loanRequestDetails.duration
    );
    setLoading("none");
    if (!myloan.id) {
      setShowNotifier("block");
      setModalTitle("Error");
      setMessage(myloan.error);
    } else {
      setShowNotifier("block");
      setModalTitle("Success");
      setMessage(
        `You have successfully taken a loan of $${loanValue} you will be debited automatically withing the period of ${durationValue} months`
      );
      setCloseEditModal("none");
      setLoanValue("");
      setDurationValue("");
    }
  };

  const handleLoanChange = (e) => {
    setLoanValue(e.target.value);
    console.log(loanValue);
  };

  const handleDurationChange = (e) => {
    setDurationValue(e.target.value);
    console.log(durationValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "left",
          marginTop: "30px",
        }}
      >
        <Text fontSize={"20px"} value={"Loan History"} />
        <Text
          fontSize={"25px"}
          fontWeight={600}
          value={!user ? undefined : `${user.first_name} ${user.last_name}`}
        />
      </div>

      <div
        style={{
          width: "98%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5px",
          borderRadius: "5px",
          padding: "10px 0px",
        }}
      >
        <div
          style={{
            width: "98%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "5px",
            borderRadius: "5px",
            padding: "0px 0px 0px",
          }}
        >
          <Table />
        </div>
      </div>
      <div
        style={{
          width: "98%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "left",
          flexWrap: "wrap",
          marginTop: "30px",
          borderRadius: "5px",
          padding: "10px 0px 20px",
        }}
      >
        <Grid item xs={2} paddingRight={"20px"}>
          <PrimaryButton
            label="Take A Loan"
            onClick={() => setCloseEditModal("flex")}
          />
        </Grid>
        <Grid item xs={2}>
          <a
            href="https://occasionalbiodegradablepassword.chuksdozie.repl.co/"
            style={{ textDecoration: "none" }}
          >
            <PrimaryButton label="Repay Loan" />
          </a>
        </Grid>
      </div>

      {/* edit profile modal starts here */}
      <div
        className={classes.container}
        style={{ display: closeEditModal }}
        // onClick={() => setCloseEditModal("none")}
      >
        <div className={classes.modalBox}>
          <div className={classes.header}>
            <Text value={"Take a loan"} fontSize="20px" fontWeight="400" />
            <AiOutlineClose onClick={() => setCloseEditModal("none")} />
          </div>
          <Grid container item xs={12} spacing={2} justifyContent="center">
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <Text
                value={"Available Funds"}
                fontSize="13px"
                fontWeight="400"
              />
              <Text value={"$10,000"} fontSize="25px" fontWeight="400" />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                placeholder="How much loan?"
                value={loanValue}
                onChange={handleLoanChange}
              />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                placeholder="How long will you pay back?"
                value={durationValue}
                onChange={handleDurationChange}
              />
            </Grid>
            <Grid item xs={10}>
              <PrimaryButton
                type="submit"
                label="Proceed"
                onClick={() => handleLoanClick()}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      {/* edit profile modal ends here */}

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
            <PrimaryButton
              label={"OK"}
              onClick={() => setShowNotifier("none")}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Loan;
