import React, { useContext } from "react";
import { Grid } from "@mui/material";
import Text from "../../atoms/text/Text";
import { LoanContext } from "../../../store/UserContext";
const LoanContainer = () => {
  const { loan } = useContext(LoanContext);
  console.log(loan, "4210");
  return (
    <div
      style={{
        backgroundColor: "#6b0f1a",
        backgroundImage: "linear-gradient(315deg, #b91872 0%, #3f0d12 74%)",
        borderRadius: "5px",
        padding: "30px",
        height: "170px",
        boxShadow: "0 0 3px 3px rgba(150,150,150,0.5)",
      }}
    >
      <Grid
        container
        xs={12}
        direction="column"
        justifyContent="left"
        alignItems="flex-start"
        // backgroundColor={"red"}
        spacing={1}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="flex-start"
          spacing={2}
        >
          <Text value={`Current Loan Details`} color={"#fff"} fontSize="18px" />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="flex-start"
          spacing={2}
          padding={"10px 0"}
        >
          <Text value={`Amount Left`} color={"#fff"} fontSize="15px" />
          <Text
            value={loan === undefined ? "No Debts" : loan.amount_left}
            color={"#fff"}
            fontSize="70px"
          />
          <Grid container item xs={12} justifyContent="space-between">
            <Text
              value={
                loan === undefined
                  ? "Duration: N/A"
                  : `Duration: ${loan.duration}`
              }
              color={"#fff"}
              fontSize="12px"
            />
            <Text
              value={
                loan === undefined
                  ? "Duration Left: N/A"
                  : `Duration Left: ${loan.duration_left}`
              }
              color={"#fff"}
              fontSize="12px"
            />
            <Text
              value={
                loan === undefined
                  ? "PPM: N/A"
                  : `PPM: ${loan.payment_per_month}`
              }
              color={"#fff"}
              fontSize="12px"
            />
            <Text
              value={
                loan === undefined
                  ? "Loan Amount: N/A"
                  : `Loan Amount: ${loan.loan_amount}`
              }
              color={"#fff"}
              fontSize="12px"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoanContainer;
