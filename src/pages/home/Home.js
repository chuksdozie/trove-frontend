import React from "react";
import { Grid } from "@mui/material";
import PortfolioValueContainer from "../../components/molecules/displayContainers/PortfolioValue";
import LoanContainer from "../../components/molecules/displayContainers/Loan";
import PortfolioContainer from "../../components/molecules/displayContainers/Portfolio";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        margin: "50px auto",
        height: "250px",
      }}
    >
      <Grid container item xs={12} justifyContent="space-evenly">
        <Grid item xs={5.5}>
          <PortfolioValueContainer />
        </Grid>
        <Grid item xs={5.5}>
          <Link to="/loans" style={{ textDecoration: "none" }}>
            <LoanContainer />
          </Link>
        </Grid>
      </Grid>
      <h2 style={{ margin: "30px auto 5px", color: "#013220" }}>
        My Portfolio
      </h2>
      <hr />
      <Grid
        container
        item
        xs={12}
        justifyContent="space-evenly"
        marginTop="30px"
      >
        <Grid item xs={12} height="120px">
          <PortfolioContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
